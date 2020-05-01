import styled from "styled-components"


export const Panel = styled.div`
    width: ${props => props.width ? props.width : "80%"};
    height: ${props => props.height ? props.height : "80%"};
    background-color: ${props => props.bgColour ? props.bgColour : "#64C9C9"};
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0px rgba(0,0,0,0.15);
    display: ${props => props.isVisible ? "flex" : "none"};
    flex-direction: ${props => props.direction ? props.direction : "row"};
    flex-wrap: ${props => props.wrap ? props.wrap : "no-wrap"};
    justify-content: center;
    align-items: center;
    margin: ${props => props.marginRect ? props.marginRect : "0"};
    z-index: 50;
    padding: 10px;
    ${props => props.pointerNone && `
        pointer-events: none;
    `};
`