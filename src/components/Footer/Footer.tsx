import React from 'react'
import * as Styled from './Footer.styles'


const Footer = () => {
  return (
    <Styled.footerContainer>
      <Styled.footerText>
        Este é um site profissional autoral.
        </Styled.footerText>
      <Styled.footerText>
      Todos os direitos reservados - Fontoura Advogados 2022.
        </Styled.footerText>
      <Styled.footerText>
          Criado por <Styled.footerLink href='https://www.github.com/mchiari'> Matheus Chiari</Styled.footerLink>
        </Styled.footerText>
    </Styled.footerContainer>
  )
}

export default Footer