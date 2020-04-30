import styled from "styled-components";

export const MessageText = styled.p`
    font-family: inherit;
    color: white;
    margin: 0;
    font-size: 2rem;
    ${props => props.fontSize === "small" && `
        font-size: 1rem;
    `}
    ${props => props.fontSize === "medium" && `
        font-size: 1.5rem;
    `}
    ${props => props.fontSize === "large" && `
        font-size: 2rem;
    `}
`