import React from 'react'
import Cards from '../Cards/Cards'
import CoverImage from './CoverImage/CoverImage'
import * as Styled from './Main.styles'


const Main = () => {


  return (
    <>
      <Styled.mainWrapper>
        <Styled.mainContainer>
          <CoverImage />
        </Styled.mainContainer>
        <Styled.alternativeContainer><Cards /></Styled.alternativeContainer>
        <Styled.mainContainer>teste 2</Styled.mainContainer>
        <Styled.alternativeContainer>teste 3</Styled.alternativeContainer>
      </Styled.mainWrapper>
    </>
  )
}

export default Main