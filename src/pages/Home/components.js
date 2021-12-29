import styled, {css} from 'styled-components'

export const Wrapper = styled.div`

  ${props => css`
    display: ${props.display};
    justify-content: ${props.justify };
    flex-direction: ${props.direction};
    width: ${props.width};
    height: ${props.height};
    margin: ${props.margin };
    padding: ${props.padding };
    max-width: ${props.maxWidth};
    flex-wrap: ${props.wrap };
  `}
`

export const MainWrapper = styled.main`
  transform: translate(-100%);

  ${props => css`
    display: ${props.display};
    justify-content: ${props.justify };
    flex-direction: ${ props.direction || "column"};
    flex-wrap: ${props.wrap};
    width: ${ props.width };
    height: ${ props.height };
    margin: ${ props.margin };
    padding: ${ props.padding };
    border-left: ${ props.borderLeft };
    max-width: ${ props.maxWidth };
  `}

  ${({theme}) => theme.above.large({flexDirection: "row"})}
  `

