import styled from "styled-components";


export const SceneManager = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: ${props => props.sceneColour ? props.sceneColour : "#ffffff"};
    justify-content: center;
    align-items: center;
`;