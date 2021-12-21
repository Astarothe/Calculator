import { css } from 'styled-components'

const font = 'sans-serif'

// Color palette
export const black = '#000000'
export const white = '#ffffff'
export const smokyWhite = '#F2F2F2'
// const error = '#c86464'
// const primary = '#c06c84'
const secondary = 'white'
// const secondaryLight = '#6a6b7b'
export const darkBlack = '#434343'
export const darkBackground = '#202020'
export const coloredBackground = "#2182bf"
export const colorBackButton = "#3d537c"

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
  xl: 1680,
}
const fontFamily = 'Helvetica Neue'

const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default {
  above,
  below,
  font,
  fontFamily,
  fontSizes: [24, 32, 64],
  colors: {
    main: black,
    secondary,
    backgroundHeader: darkBlack,
    backgroundMain: white,
    white,
    black,
  },
  button: {
    width: '150px',
    height: '150px',
    backgroundColor: '#F2F2F2',
    color: black,
    border: '1px solid #707070',
  },
}

export const allTheme = {
  above,
  below,
  font,
  fontFamily,
  fontSizes: [24, 30, 32, 64],
  colors: {
    main: black,
    secondary: white,
    backgroundMain: white,
    backgroundHeader: darkBlack,
    backgroundButton: smokyWhite,
    white,
    black,
  },
  button: { backgroundColor: smokyWhite, color: black },

  opacity: [0.3, 0.7, 1],
  transition: [0.3, 0.5],
}

export const lightColors = {
  main: black,
  secondary: white,
  backgroundMain: white,
  backgroundButton: smokyWhite,
}

export const darkColors = {
  main: white,
  secondary: black,
  backgroundMain: darkBlack,
  backgroundButton: darkBlack,
}

export const coloredColors = {
  ...darkColors,
  backgroundButton: colorBackButton,
}

// fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72, 80],
// colors: {
//   primary,
//     secondary,
//     secondaryLight,
//     black,
//     white,
//     error,
// },
// spaces: [0, 4, 8, 16, 32, 64, 128],
