import React from 'react'

import * as S from './styled'

export default function Item({
  onClick,
  className,
  label,
  description,
  image,
  title,
  icon,
}) {
  return (
    <S.ItemContainer title={title} onClick={onClick} className={className}>
      {image}

      <div>
        <p className="primary">{label}</p>
        <p>{description}</p>
      </div>

      <S.ItemIcon>{icon}</S.ItemIcon>
    </S.ItemContainer>
  )
}
