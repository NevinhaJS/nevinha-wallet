import React from 'react'

import * as S from './styled'

export default function Item({
  onClick,
  className,
  label,
  description,
  image,
  icon,
}) {
  return (
    <S.ItemContainer onClick={onClick} className={className}>
      <img src={image} alt={label} />

      <div>
        <p className="primary">{label}</p>
        <p>{description}</p>
      </div>

      {icon}
    </S.ItemContainer>
  )
}
