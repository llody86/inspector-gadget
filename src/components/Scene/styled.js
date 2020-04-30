import styled from "styled-components";

export const SceneContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.colour};
    display: ${props => props.isActive ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;