import styled from 'styled-components'
import { Wrapper } from '@/pages/Home/components'

export const Heading = styled.h2`
   font-size: ${({ theme }) => theme.fontSizes[1]}px;
   color: ${({ theme }) => theme.colors.main};

   ${({ theme }) => theme.above.small({ fontSize: theme.fontSizes[2] })}
`
export const WrapperSettings = styled(Wrapper)`
   transform: translate(100%);
   margin: 20px;

   ${({ theme }) => theme.above.xs({ margin: '40px' })}
   ${({ theme }) => theme.above.small({ margin: '60px' })}
   ${({ theme }) => theme.above.med({ margin: '60px 84px' })}
`

export const ButtonClear = styled.button`
   font-size: ${({ theme }) => theme.fontSizes[0] + 'px'};
   padding-left: 27px;
   width: 250px;
   height: 93px;
   background-color: ${({ theme }) => theme.colors.backgroundButton};
   color: ${({ theme }) => theme.colors.main};
   border: 2px solid #434343;
   border-radius: 8px;
   text-align: left;
   cursor: pointer;
   transition: 0.3s;

   &:hover{
      opacity: 0.7;
   }
   &:active{
      opacity: 0.3;
   }

    ${({ theme }) => theme.above.xs({ width: '400px', fontSize: theme.fontSizes[1] })}
`

export const TitleTheme = styled.h3`
   font-size: 24px;
   font-weight: normal;
   color: ${({ theme }) => theme.colors.main};
`

export const WrapperSwitch = styled(Wrapper)`
margin: 50px 0 0;
`
