import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NameProject = styled.h1`
   font-size: ${({ theme }) => theme.fontSizes[0]}px;
   color: ${({ theme }) => theme.colors.white};

   ${({ theme }) => theme.above.small({
      fontSize: theme.fontSizes[1],
   })}
`

export const Header = styled.header`
   margin: 0 auto;
   background-color: ${({ theme }) => theme.colors.backgroundHeader};
   padding: 37px 0px;
   display: flex;
   justify-content: space-around;

   ${({ theme }) => theme.above.xs({
      padding: '37px',
      justifyContent: 'space-between',
   })}
`

export const Link = styled(NavLink)`
   color: ${({ theme }) => theme.colors.white};
   font-size: ${({ theme }) => theme.fontSizes[0]}px;
   text-decoration: none;
   opacity: ${({theme}) => theme.opacity[1]};
   transition: ${({theme}) => theme.transition[0]}s;
   position: relative;

   &:hover {
      opacity: 0.5;
   }

   &:active {
      opacity: ${({theme}) => theme.opacity[0]};
   }

   &.active{

     &:before{
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.white};
      position: absolute;
      bottom: -5px;
     }
      opacity: ${({theme}) => theme.opacity[2]};
      height: fit-content;

      &:active {
         opacity: ${({theme}) => theme.opacity[1]};
      }
   }

   ${({ theme }) => theme.above.small({
      fontSize: theme.fontSizes[2],
   })}
`

export const WrapperLink = styled.div`
   margin: 0 10px;
   width: 180px;
   display: flex;
   justify-content: space-around;

   ${({ theme }) => theme.above.small({
      width: '230px',
      justifyContent: 'space-between',
   })};

   ${({ theme }) => theme.above.large({
      width: '250px',
      justifyContent: 'space-around',
   })}
`
