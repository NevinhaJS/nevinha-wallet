import styled from 'styled-components'

export const BackupContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  text-align: center;
`

export const BackupTitle = styled.h3`
  font-size: min(22px, 6vw);
  font-weight: 400;
  color: var(--smoth);
  margin-bottom: min(40px, 8vh);
`

export const BackupKey = styled.p`
  width: 100%;
  word-break: break-word;
`

export const BackupButton = styled.button`
  margin-top: min(69px, 8vh);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: min(26px, 5vw);

  svg {
    transition: transform 0.2s ease-in-out;
    width: min(29px, 7vw) !important;
    margin-left: min(1rem, 3vw);
  }

  &:hover svg {
    transform: translateX(min(1rem, 3vw));
  }
`
