import styled from 'styled-components'
import { Wrapper } from '@/pages/Home/components'

export const WrapperCalculator = styled(Wrapper)`
   ${({ theme }) => theme.above.large({
      width: '70%',
   })}
`
