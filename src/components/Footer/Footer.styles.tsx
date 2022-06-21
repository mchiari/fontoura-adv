import styled from "styled-components";

export const footerContainer = styled.div`
padding: 1rem;
width: 100%;
height: 5rem;
background-color: var(--blackColor);
color: var(--whiteColor);
display: flex;
flex-direction: column;
position: relative;
bottom: 0;
justify-content: center;
align-items: center;
`;

export const footerText = styled.span`
color:var(--whiteColor);
font-size: 0.8rem;
padding: 0.2rem;
`;

export const footerLink = styled.a`
color: var(--primaryColor);
`