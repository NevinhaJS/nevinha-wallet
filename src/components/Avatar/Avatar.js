import React from 'react'
import useSWR from 'swr'
import styled from 'styled-components'
import fetcher from '../../services/fetcher'

const AvatarImage = styled.img`
  width: 100%;
`

function Avatar({ text, className }) {
  const { data, error } = useSWR(`https://obscure-depths-05498.herokuapp.com/?text=${text}`, fetcher)

  if (!data || error) return null

  return <AvatarImage className={className} src={data?.image} alt={text} />
}

export default Avatar
