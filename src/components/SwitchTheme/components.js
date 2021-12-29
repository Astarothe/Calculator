import styled from 'styled-components'


export const Select = styled.select`
  margin: 10px 0px 50px;
  width: 250px;
  font-size: 26px;
  padding: 23px;
  border-radius: 8px;
  transition: 0.3s;
  border: 2px solid #434343;
  background-color: ${({ theme }) => theme.colors.backgroundButton};
  color: ${({ theme }) => theme.colors.main};

  ${({ theme }) => theme.above.xs({ width: '400px', fontSize: theme.fontSizes[1] })};
`
