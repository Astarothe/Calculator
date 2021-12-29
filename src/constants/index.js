export * from './actions'
export * from './router'

export const CLEAR_ALL = 'c'
export const CLEAR_LAST = 'ce'
export const CALCULATE = '='
export const OPEN_BRACKET = '('
export const CLOSED_BRACKET = ')'
export const DOT = '.'
export const SUM = '+'
export const SUBTRACT = '-'
export const DIVISION = '/'
export const MULTIPLICATION = '*'
export const BACKSPACE = 'Backspace'
export const ENTER = 'Enter'
export const ZERO = "0"

export const LIGHT_THEME = 'Light Theme'
export const COLORED_THEME = 'Colored Theme'
export const DARK_THEME = 'Dark Theme'

export const arrButtons = [CLEAR_ALL, '7', '8', '9', MULTIPLICATION, SUBTRACT, '4', '5',
   '6', DIVISION, SUM, '1', '2', '3', CALCULATE, DOT, OPEN_BRACKET, ZERO, CLOSED_BRACKET, CLEAR_LAST]

export const NUMBERS = ['1','2',"3",'4',"5","6",'7',"8","9"]


export const LIGHT_THEME_ID = 'light'
export const DARK_THEME_ID = 'dark'
export const COLORED_THEME_ID = 'colored'

export const itemsTheme = [
   { id: LIGHT_THEME_ID, value: LIGHT_THEME },
   { id: COLORED_THEME_ID, value: COLORED_THEME },
   { id: DARK_THEME_ID, value: DARK_THEME },
]

export const operation = [MULTIPLICATION, SUBTRACT, DIVISION, SUM]

export const operationAndScope = [...operation, OPEN_BRACKET, CLOSED_BRACKET]

export const keyboard = [BACKSPACE, ENTER]

export const allEvents = [...arrButtons, ...keyboard]
