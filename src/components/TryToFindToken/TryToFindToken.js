import React from 'react'
import { Link } from 'react-router-dom'

import { FindText } from './styled'

function TryToFindToken() {
  return (
    <FindText className="txt-center">
      Could not find your token? Try to{' '}
      <Link className="primary" to="/wallet/import-token">
        import a new token here
      </Link>
    </FindText>
  )
}

export default TryToFindToken
