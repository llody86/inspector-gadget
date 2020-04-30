import styled from "styled-components";

export const InteractiveObject = styled.div`
    position: absolute;
    left: ${props => props.xpos};
    top: ${props => props.ypos};
    z-index: ${props => props.zindex};
    width: ${props => props.width};
    height: ${props => props.height};
`;
    
export const InteractiveObjectImage = styled.img`
    width: 100%;
    height: 100%;
`