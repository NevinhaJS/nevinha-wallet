import styled from 'styled-components'

export const ImportContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 2rem;
  text-align: center;
`

export const ImportTitle = styled.h3`
  font-size: min(22px, 6vw);
  font-weight: 400;
  color: var(--smoth);
  margin-bottom: min(40px, 8vh);
`

export const ImportInput = styled.input`
  font-size: min(32px, 6vw);
  font-style: italic;
  padding-right: min(84px, 20vw);
  height: min(86px, 12vh);
`

export const ImportInputContainer = styled.div`
  position: relative;
`

export const ImportButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  width: min(84px, 20vw);
  border-left: solid 3px var(--primary-bd);
  height: min(86px, 12vh);
  box-shadow: -5px 0px 9px rgb(0 141 31 / 65%);
`

export const ImportError = styled.p`
  text-align: left;
`
