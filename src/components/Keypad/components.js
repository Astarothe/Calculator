import styled from 'styled-components'
import { Wrapper } from '@/pages/Home/components'

export const Button = styled.button`
   width: 60px;
   height: 60px;
   background-color: ${({ theme }) => theme.colors.backgroundButton};
   color: ${({ theme }) => theme.colors.main};
   font-size: ${({ theme }) => theme.fontSizes[0]}px;
   border: 2px solid ${({ theme }) => theme.colors.main};
   border-radius: 15px;
   margin: 20px 15px;
   cursor: pointer;
   text-transform: uppercase;
   transition: ${({ theme }) => theme.transition[0]};

   &:hover{
     opacity: ${({ theme }) => theme.opacity[1]};
   }

   &:active{
     opacity: ${({ theme }) => theme.opacity[0]};
   }

   ${({ theme }) => theme.above.xs({
     width: "70px",
     height: "75px",
     fontSize: theme.fontSizes[1],
   })}

   ${({ theme }) => theme.above.small({
     width: "110px",
     height: "110px",
   })}

   ${({ theme }) => theme.above.med({
     width: "150px",
     height: "150px",
     fontSize: theme.fontSizes[3],
   })}

   ${({ theme }) => theme.above.large({
     width: "115px",
     height:" 120px",
     margin: '22px 25px',
   })}

   ${({ theme }) => theme.above.xl({
     width: "150px",
     height: "150px",
     margin: "22px 40px",
   })}
`
export const ButtonsWrapper = styled(Wrapper)`
   max-width: 500px;
   margin: 20px auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;

   ${({ theme }) => theme.above.small({ maxWidth: "700px"})}

   ${({ theme }) => theme.above.med({ maxWidth: "900px"})}

   ${({ theme }) => theme.above.xl({ maxWidth: "1250px"})}
`
