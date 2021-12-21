import styled from 'styled-components'

export const Wrapper = styled.div`
  display: ${props => props.display || 'null'};
  justify-content: ${props => props.justify || null};
  flex-direction: ${props => props.direction || null};
  flex-wrap: ${props => props.wrap || null};
  width: ${props => props.width || null};
  height: ${props => props.height || null};
  margin: ${props => props.margin || null};
  padding: ${props => props.padding || null};
  max-width: ${props => props.maxWidth || null};
`

export const MainWrapper = styled.main`
  transform: translate(-100%);
  flex-direction: column;
  display: ${props => props.display || 'block'};
  justify-content: ${props => props.justify || null};
  flex-direction: ${props => props.direction || null};
  flex-wrap: ${props => props.wrap || null};
  width: ${props => props.width || null};
  height: ${props => props.height || null};
  margin: ${props => props.margin || null};
  padding: ${props => props.padding || null};
  border-left: ${props => props.borderLeft || null};
  max-width: ${props => props.maxWidth || null};

  ${({theme}) => theme.above.large({flexDirection: "row"})}
  `

