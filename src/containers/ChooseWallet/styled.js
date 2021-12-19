import styled from 'styled-components'

export const ChooseWrapper = styled.section`
  width: 100%;
  display: flex;
  height: 91vh;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`
export const ChooseContainer = styled.article`
  width: 100%;
  max-width: 1020px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 9%;
  position: relative;
  padding: 0 4rem;

  &:hover > div {
    transform: scale(1.05);
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 4vh;
  }
`

export const NevinhaLogo = styled.img`
  width: 100%;
  max-width: 112px;
  position: absolute;
  left: 50%;
  top: 28px;
  z-index: 10;
  margin-left: -56px;

  @media only screen and (max-width: 768px) {
    max-width: 14vw;
    top: 50%;
    margin-left: -6vw;
    margin-top: -14vw;
  }
`

export const ChooseBox = styled.div`
  border: solid 3px var(--primary-bd);
  min-height: 226px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  padding: 0 3rem;
  transition: all 0.3s ease-out;

  ${({ hoverable = true }) =>
    hoverable &&
    `
    &:hover {
      transform: scale(0.95) !important;
    }
  `}

  p {
    font-size: min(32px, 6vw);
    margin: 0;
    text-align: center;
    font-style: italic;
    -webkit-font-smoothing: antialiased;
  }
`
