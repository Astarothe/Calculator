import styled from 'styled-components'
import { Wrapper } from '@/pages/Home/components'
import { DisplayWrapper } from '@/components/Display/components'

export const HistoryTitle = styled.h2`
   color: ${({ theme }) => theme.colors.main};
   font-size: ${({ theme }) => theme.fontSizes[0]}px;
   font-weight: normal;
   text-align: center;
   margin: 15px;

   &:after{
      content: "";
      display: block;
      width: 90%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.main};
      position: absolute;
      top: 0;
      left: 5%;
      ${({ theme }) => theme.above.large({ content: 'none' })}
   }

   ${({ theme }) => theme.above.small({
     fontSize: theme.fontSizes[1],
   })}
`

export const HistoryItem = styled.p`
   font-size: ${({ theme }) => theme.fontSizes[1]}px;
   color: ${({ theme }) => theme.colors.main};
   margin: 35px 55px;
`

export const HistoryWrapper = styled(DisplayWrapper)`
   width: 100%;
   margin: 0 auto;
   position: relative;

   ${({ theme }) => theme.above.large({
      borderLeft: `2px solid  ${theme.colors.main}`,
      width: '30%',
      borderTop: 'none',
      marginTop: '20px',
   })}
`
export const HistoryItemWrapper = styled(Wrapper)`
   &::-webkit-scrollbar {
      width: 11px;
   }

   &::-webkit-scrollbar-track {
      background: transparent;
   }

   &::-webkit-scrollbar-thumb {
      background-color: ${({theme}) => theme.colors.backgroundHeader};
      border-radius: 8px;
   }

   ${({ theme }) => theme.above.large({
      overflowY: 'scroll',
      maxHeight: ' 850px',
      marginRight: "30px",
   })}
`
