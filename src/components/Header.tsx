import { Rocket } from 'phosphor-react'

import { HeaderContainer } from './Header.styles';

export function Header() {
  return (
    <HeaderContainer>
        <Rocket size={30}/>
        <h1>to<strong>do</strong></h1>
    </HeaderContainer>
  )
}
