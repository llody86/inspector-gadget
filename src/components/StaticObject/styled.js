import styled from "styled-components";


export const StaticGroup = styled.div`
    position: absolute;
    left: ${props => props.xpos ? props.xpos : "0px"};
    top: ${props => props.ypos ? props.ypos : "0px"};
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.height : "auto"};
    z-index: ${props => props.zindex};
    display: block;
    ${props => props.isVisible === false && `
        display: none;
    `};
`;

export const StaticObject = styled.img`
    position: absolute;
    left: ${props => props.xpos ? props.xpos : "0px"};
    top: ${props => props.ypos ? props.ypos : "0px"};
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.height : "auto"};
    z-index: ${props => props.zindex};
    pointer-events: none;
    display: block;
    ${props => props.isVisible === false && `
        display: none;
    `};
`;