import React from 'react'
import * as Styled from './Header.styles'

const Header = () => {
  return (
    <Styled.headerContainer>
        <Styled.logoContainer>
            Logo
        </Styled.logoContainer>
        <Styled.linksContainer>
            Link Link Link Link
        </Styled.linksContainer>
        <Styled.contactContainer>
            Endereço/telefone/email
        </Styled.contactContainer>

    </Styled.headerContainer>
  )
}

export default Header