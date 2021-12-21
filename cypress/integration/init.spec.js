it('visits the app', () => {
  cy.visit('/')
})

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('it check correct display value, and result', () => {
    cy.get('button').contains('5').click()
    cy.get('h3').should('contain', '5')
    cy.get('span').should('be.visible').should('contain', '5')
  })

  it('it check correct display multiple values', () => {
    cy.get('button').contains('5').click()
    cy.get('button').contains('6').click()
    cy.get('h3').should('contain', '56')
    cy.get('span').should('be.visible').should('contain', '56')
  })

  it('it check correct sum of values', () => {
    cy.get('button').contains('1').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()

    cy.get('span').should('be.visible').should('contain', '3')
    cy.get('h3').should('be.visible').should('contain', '1 + 2')

    cy.get('button').contains('=').click()

    cy.get('h3').should('contain.text', '3')
    cy.get('span').should('not.be.visible')
  })

  it('it check correct subtract of values', () => {
    cy.get('button').contains('2').click()
    cy.get('button').contains('-').click()
    cy.get('button').contains('1').click()

    cy.get('span').should('be.visible').should('contain', '1')
    cy.get('h3').should('be.visible').should('contain', '2 - 1')

    cy.get('button').contains('=').click()
    cy.get('h3').should('contain.text', '1')
    cy.get('span').should('not.be.visible')
  })

  it('it check correct multiplication  of values', () => {
    cy.get('button').contains('2').click()
    cy.get('button').contains('*').click()
    cy.get('button').contains('2').click()

    cy.get('span').should('be.visible').should('contain', '4')
    cy.get('h3').should('be.visible').should('contain', '2 * 2')

    cy.get('button').contains('=').click()
    cy.get('h3').should('contain.text', '4')
    cy.get('span').should('not.be.visible')
  })

  it('it check correct division of values', () => {
    cy.get('button').contains('8').click()
    cy.get('button').contains('/').click()
    cy.get('button').contains('4').click()

    cy.get('span').should('be.visible').should('contain', '2')
    cy.get('h3').should('be.visible').should('contain', '8 / 4')

    cy.get('button').contains('=').click()
    cy.get('h3').should('contain.text', '2')
    cy.get('span').should('not.be.visible')
  })

  it('it check correct add history item', () => {
    cy.get('button').contains('8').click()
    cy.get('button').contains('/').click()
    cy.get('button').contains('4').click()
    cy.get('button').contains('=').click()

    cy.get('p').should('contain.text', '8 / 4')
  })

  it('it check correct multiplication of values in brackets, correct priority ', () => {
    cy.get('button').contains('8').click()
    cy.get('button').contains('*').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains(')').click()

    cy.get('span').should('be.visible').should('contain', '32').should('not.contain.text', '18')
    cy.get('h3').should('be.visible').should('contain', '8 * ( 2 + 2 ) ')

    cy.get('button').contains('=').click()

    cy.get('h3').should('contain', '32').should('not.contain', '18')
    cy.get('span').should('not.be.visible')

    cy.get('p').should('contain', '8 * ( 2 + 2 ) ')
  })

  it('it check correct priority of expression ', () => {
    cy.get('button').contains('2').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains(')').click()
    cy.get('button').contains('*').click()
    cy.get('button').contains('2').click()

    cy.get('span')
      .should('be.visible')
      .should('contain', '10')
      .should('not.contain', '8')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '2 + ( 2 + 2 ) * 2')

    cy.get('button').contains('=').click()

    cy.get('span').should('not.be.visible')
    cy.get('h3')
      .should('contain', '10')
      .should('not.contain', '8')

    cy.get('p').should('contain', '2 + ( 2 + 2 ) * 2')
  })

  it('it check correct multiplication of brackets', () => {
    cy.get('button').contains('4').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains(')').click()

    cy.get('span').should('be.visible')
      .should('contain', '16')
      .should('not.contain', '8')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '4 ( 2 + 2 ) ')

    cy.get('button').contains('=').click()

    cy.get('span').should('not.be.visible')
    cy.get('h3').should('contain', '16').should('not.contain', '8')

    cy.get('p').should('contain', '4 ( 2 + 2 ) ')
  })

  it('it check correct auto-insert of close brackets', () => {
    cy.get('button').contains('4').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()


    cy.get('span')
      .should('be.visible')
      .should('contain', '16')
      .should('not.contain', '8')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '4 ( 2 + 2')

    cy.get('button').contains('=').click()

    cy.get('span').should('not.be.visible')
    cy.get('h3').should('contain', '16').should('not.contain', '8')

    cy.get('p').should('contain', '4 ( 2 + 2')
  })

  it('it check correct multiple unclosed or unopened brackets', () => {
    cy.get('button').contains('3').click()
    cy.get('button').contains('*').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains(')').click()


    cy.get('span')
      .should('be.visible')
      .should('contain', '15')
      .should('not.contain', '11')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '3 * ( ( ( ( ( 3 + 2 ) ')

    cy.get('button').contains('=').click()

    cy.get('span').should('not.be.visible')
    cy.get('h3').should('contain', '15').should('not.contain', '11')

    cy.get('p').should('contain', '3 * ( ( ( ( ( 3 + 2 ) ')


    cy.get('button').contains('*').click()
    cy.get('button').contains(')').click()
    cy.get('button').contains(')').click()
    cy.get('button').contains(')').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('*').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains(')').click()

    cy.get('span')
      .should('be.visible')
      .should('contain', '225')
      .should('not.contain', '137')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '15 * ) ) ) 3 * ( ( 3 + 2 ) ')

    cy.get('button').contains('=').click()

    cy.get('span').should('not.be.visible')
    cy.get('h3').should('contain', '225').should('not.contain', '137')

    cy.get('p').should('contain', '15 * ) ) ) 3 * ( ( 3 + 2 ) ')


  })

  it('it check correct one dot in one value', () => {
    cy.get('button').contains('2').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('.').click()

    cy.get('span')
      .should('be.visible')
      .should('contain', '3.4')
      .should('not.contain', '2..2..+.1..2..')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '2.2 + 1.2')

    cy.get('button').contains('=').click()

    cy.get('span').should('not.be.visible')
    cy.get('h3').should('contain', '3.4').should('not.contain', '3.400')

    cy.get('p').should('contain', '2.2 + 1.2')


    cy.get('button').contains('*').click()
    cy.get('button').contains('2').click()

    cy.get('span')
      .should('be.visible')
      .should('contain', '6.8')
      .should('not.contain', '6.800')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '3.4 * 2')


    cy.get('button').contains('=').click()

    cy.get('span').should('not.be.visible')
    cy.get('h3').should('contain', '6.8').should('not.contain', '6.800')

    cy.get('p:first-child').should('contain', '2.2 + 1.2')
    cy.get('p:last-child').should('contain', '3.4 * 2')
  })

  it('it check correct absence of number after the dot', () => {
    cy.get('button').contains('2').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('1').click()

    cy.get('span')
      .should('be.visible')
      .should('contain', '6.2')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '2. + 2. + 2.1 + 0.1')

    cy.get('button').contains('=').click()


    cy.get('span').should('not.be.visible')
    cy.get('h3').should('contain', '6.2').should('not.contain', '6.200')

    cy.get('p').should('contain', '2. + 2. + 2.1 + 0.1')
  })

  it('it check correct display  negative number, and dot', () => {
    cy.get('button').contains('2').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('-').click()
    cy.get('button').contains('3').click()

    cy.get('span')
      .should('be.visible')
      .should('contain', '-0.9')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '2.1 - 3')

    cy.get('button').contains('=').click()

    cy.get('span').should('not.be.visible')
    cy.get('h3').should('contain', ' - 0.9')

    cy.get('p').should('contain', '2.1 - 3')
  })

  it('it check correct display last remove value (\'ce\') ', () => {
    cy.get('button').contains('2').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('3').click()

    cy.get('span')
      .should('be.visible')
      .should('contain', '44')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '21 + 23')

    cy.get('button').contains('ce').click()

    cy.get('span')
      .should('be.visible')
      .should('contain', '23')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '21 + 2')

    cy.get('button').contains('ce').click()

    cy.get('span')
      .should('be.visible')
      .should('contain', '21')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '21 + ')
  })

  it('it check correct display remove all value', () => {
    cy.get('button').contains('2').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('3').click()

    cy.get('span')
      .should('be.visible')
      .should('contain', '44')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '21 + 23')

    cy.get('button').contains('c').click()

    cy.get('span')
      .should('not.be.visible')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '0')

  })

  it('it check correct link transitions', () => {
    cy.get('a[href="#/settings"]').click()
    cy.location().should(loc => {
      expect(loc.hash).to.eq('#/settings')
      expect(loc.port).to.eq('3030')
    })
  })
})


describe('Settings page', () => {
  beforeEach(() => {
    cy.visit('/#/settings')
  })

  it('it check correct switch dark theme', () => {
    cy.get('select').select('dark')

    cy.get('body').should('have.css', 'background-color', 'rgb(32, 32, 32)')
    cy.get('h2').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('select').should('have.css', 'background-color', 'rgb(67, 67, 67)')
  })
  it('it check correct switch light theme', () => {
    cy.get('select').select('light')

    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.get('h2').should('have.css', 'color', 'rgb(0, 0, 0)')
    cy.get('select').should('have.css', 'background-color', 'rgb(242, 242, 242)')
  })

  it('it check correct switch colored theme', () => {
    cy.get('select').select('colored')

    cy.get('body').should('have.css', 'background-color', 'rgb(33, 130, 191)')
    cy.get('h2').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('select').should('have.css', 'background-color', 'rgb(61, 83, 124)')
  })

  it('it check correct clear all history', () => {

    cy.get('a[href="#/"]').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('=').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('=').click()

    cy.get('span')
      .should('not.be.visible')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '6')

    cy.get('p:first-child').should('contain', '2 + 1')
    cy.get('p:last-child').should('contain', '3 + 3')

    cy.get('a[href="#/settings"]').click()
    cy.get('button').contains('Clear All History').click()

    cy.get('a[href="#/"]').click()

    cy.get('span')
      .should('not.be.visible')
    cy.get('h3')
      .should('be.visible')
      .should('contain', '0')

    cy.get('p:first-child').should('not.be.visible')
    cy.get('p:last-child').should('not.be.visible')

  })
})
