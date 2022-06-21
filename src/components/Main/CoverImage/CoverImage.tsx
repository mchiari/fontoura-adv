import React from 'react'
import Image from 'next/image'
import imagem from '../../../images/cidade-de-santos-praia.jpg'
import * as Styled from './CoverImage.styles'


const CoverImage = () => {
  return (
    <Styled.coverImageContainer>
        <Image src={imagem} alt='advogado santos' width={1900} height={500} />
    </Styled.coverImageContainer>
  )
}

export default CoverImage