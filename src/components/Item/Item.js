import React from 'react'

import * as S from './styled'

export default function Item({ className, label, description, image }) {
  return (
    <S.ItemContainer className={className}>
      <img src={image} alt={label} />

      <div>
        <p className="primary">{label}</p>
        <p>{description}</p>
      </div>
    </S.ItemContainer>
  )
}
