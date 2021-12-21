import { DIVISION, DOT, MULTIPLICATION, operationAndScope, SUBTRACT, SUM } from '@/constants'

export function getMathHandler(value) {
  const math = getMathFn()
  let divByZero = false
  return applyMath(value)

  function applyMath(mathStr) {
    divByZero = false
    mathStr = removeExcessDot(mathStr)

    const scopesOpen = (mathStr.match(/\(/g) || []).length
    const scopesClose = (mathStr.match(/\)/g) || []).length

    if (scopesOpen !== scopesClose) {
      mathStr = val(mathStr)
    }

    mathStr = deepRemoveScopes(mathStr)
    mathStr = autoCorrect(mathStr)

    let result = parseLinearMath(mathStr)

    result = result.includes('.') ? (result * 1000 / 1000).toString() : result

    if (result.split('.')[1] && result.split('.')[1].length > 3) {
      result = Number(result).toFixed(3)
    }

    result = removeSymbolAndRound(result)


    return divByZero ? "0" : result
  }


  function deepRemoveScopes(str) {
    str = autoCorrect(str)

    const index = str.indexOf('(')
    if (index === -1) return parseLinearMath(str)

    let scope = '('
    let open = 1

    for (let i = index + 1; i <= 100000; i++) {
      scope += str[i]

      if (str[i] === '(') {
        open++
      } else if (str[i] === ')') {
        open--
      }

      if (open === 0) {
        return deepRemoveScopes(str.replace(scope, deepRemoveScopes(scope.slice(1, -1))))
      }
    }
  }

  function parseLinearMath(mathStr) {

    mathStr = autoCorrect(mathStr)
    mathStr = mulDiv(mathStr)
    mathStr = plusMinus(mathStr)
    return mathStr


    function mulDiv(mathStr) {
      const length = (mathStr.match(/\/|\*/g) || []).length
      if (!length) return mathStr

      for (let i = 0; i < length; i++) {
        mathStr = mathStr.replace(
          /(\d+(?:\.\d+)?)(\/|\*)(-?\d+(?:\.\d+)?)/,
          function(_, a, oper, b) {
            return math(a, oper, b)
          },
        )

        mathStr = autoCorrect(mathStr)
      }
      return mathStr
    }

    function plusMinus(mathStr) {
      const length = (mathStr.match(/\+|-/g) || []).length
      if (!length) return mathStr

      for (let i = 0; i < length; i++) {
        mathStr = mathStr.replace(
          /((?:^-)?\d+(?:\.\d+)?)(\+|-)(\d+(?:\.\d+)?)/,
          function(_, a, oper, b) {
            return math(a, oper, b)
          },
        )

        mathStr = autoCorrect(mathStr)
      }

      return mathStr
    }
  }

  function autoCorrect(mathStr) {
    return (mathStr               // Замены:
        .replace(/\s/g, '')          // Удалить все пробелы
        .replace(/\(\)/g, '')        // Убрать пустые скобки
        .replace(/--/g, '+')         // Два минуса подряд → Плюс
        .replace(/(\+\+|\*\*|\/\/)/g, (_, oper) => oper[0])
        // Двойные плюсы, умножения и пр → на один
        .replace(/\+-|-\+/g, '-')    // Плюс после минуса и наоборот → на минус
        .replace(/\)\(/g, ')*(')     // Две скобки подряд → вставить умножение
        .replace(/(\d)\(/g, '$1*(')  // Число и сразу скобка → умножение
        .replace(/\)(\d)/g, ')*$1')  // Скобка и сразу число → умножение
        .replace(/(\/|\*)\+/g, '$1') // *+ или /+ → убрать плюс
    )
  }

  function removeSymbolAndRound(value) {
    return (value.split('').filter((n,i) => n === DOT || n === SUBTRACT && i === 0 || !isNaN(n)).join('') * 1000 / 1000).toString()
  }

  function val(value) {
    const indexOpen = []
    const indexClosed = []
    for (let i = 0; i < value.length; i++) {
      if (value[i] === '(') {
        indexOpen.push(i)
      } else if (value[i] === ')') {
        if (indexOpen.length === 0) {
          indexClosed.push(i)
        }
        indexOpen.pop()
      }
    }

    if (indexOpen.length !== 0) {
      indexOpen.pop()
    }
    return `${value})`
      .split('')
      .filter((_, i) => !indexOpen.includes(i) && !indexClosed.includes(i))
      .join('')
  }

  function getMathFn() {
    const localMath = {
      [SUM]: (a, b) => Number(a) + Number(b),
      [SUBTRACT]: (a, b) => a - b,
      [MULTIPLICATION]: (a, b) => a * b,
      [DIVISION]: (a, b) => {
        if (b === '0') {
          divByZero = true
        }
        return (a / b)
      },
    }

    return function math(a, operation, b) {
      return localMath[operation](a, b)
    }
  }
}

export function separator(str) {
  return str.split('')
    .map(n => !operationAndScope.includes(n) ? n : ` ${n} `)
    .join('')
    .replace(/ {1,}/g, ' ') // удаляем лишние пробелы
}

export const removeExcessDot = str => str.split('').filter((n, i, arr) => n !== DOT ? true : !isNaN(arr[i + 1])).join('')
