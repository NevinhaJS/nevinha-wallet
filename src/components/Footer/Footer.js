import React from 'react'

import { FooterText } from './styled'

function Footer() {
  return (
    <FooterText className="txt-center light">
      Made with ❤️ by{' '}
      <a
        href="https://clovisdasilvaneto.github.io/"
        className="primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Clovis Neto
      </a>
    </FooterText>
  )
}

export default Footer
