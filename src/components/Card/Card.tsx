import * as S from './Card.styles'

import type { CardProps } from './types'

export function Card({ prop = 'Card' }: CardProps) {
  return (
    <S.Box>
      <h1>{prop}</h1>
    </S.Box>
  )
}
