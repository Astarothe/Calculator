import styled from 'styled-components'
import { Wrapper } from '@/pages/Home/components'


export const Expression = styled.h3`
   font-size: ${({ theme }) => theme.fontSizes[2]}px;
   color: ${({ theme }) => theme.colors.main};
   text-align: right;
   padding: 28px 64px 15px;
   position: relative;
   word-wrap: break-word;

   ${({ theme }) => theme.above.xs({
     fontSize: theme.fontSizes[3],
     padding: '40px 64px 20px',
   })}

   ${({ theme }) => theme.above.med({
     padding: ' 56px 64px 30px',
   })}


   &:after{
      content: "";
      display: block;
      width: 90%;
      height: 2px;
      background-color: ${({theme}) => theme.colors.main};
      position: absolute;
      bottom: 0;
      left: 5%;

      ${({ theme }) => theme.above.large({
        left: '3%',
        width: '95%',
      })}
    }

`

export const Result = styled.span`
   position: absolute;
   left: auto;
   top: 15px;
   font-size: 20px;
   padding: 0 65px;
   color: ${({ theme }) => theme.colors.main};

`


export const DisplayWrapper = styled(Wrapper)`
   max-width: 100%;
   margin: 0 auto;

   ${({ theme }) => theme.above.xs({ maxWidth: '600px' })}

   ${({ theme }) => theme.above.small({ maxWidth: '800px' })}

   ${({ theme }) => theme.above.med({ maxWidth: '1000px' })}

   ${({ theme }) => theme.above.large({ maxWidth: 'inherit' })}

`
