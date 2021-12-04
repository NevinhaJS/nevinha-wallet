import * as S from './styled'
import { Outlet } from 'react-router-dom'

function ChooseWallet() {
  return (
    <S.ChooseWrapper>
      <Outlet />
    </S.ChooseWrapper>
  )
}

export default ChooseWallet
