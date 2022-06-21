import React from 'react'
import * as Styled from './Cards.styles'


const Cards = () => {
    return (
        <>
            <Styled.h2Container>
                <Styled.h2>Áreas de atuação</Styled.h2>
            </Styled.h2Container>
            <Styled.cardsContainer>

                <Styled.card>Cível</Styled.card>
                <Styled.card>Trabalhista</Styled.card>
                <Styled.card>Criminal</Styled.card>
                <Styled.card>Empresarial</Styled.card>
            </Styled.cardsContainer>
        </>
    )
}

export default Cards