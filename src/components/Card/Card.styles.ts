import styled, { css } from 'styled-components'

import type { CardProps } from './types'

export const Box = styled.div<CardProps>`
  ${({ theme }) => css`
    padding: ${theme.spacing[4]};
  `}
`
