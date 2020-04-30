import React from "react";
import { StaticObject, StaticGroup } from "../StaticObject/StaticObject";
import InteractiveObject from "../InteractiveObject/InteractiveObject";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
`;

const Intro = () => {
    
    const selectCharacter = (charID) => {
        alert("You selected character "+charID);
    };

    return (
        <Container>
            <InteractiveObject onClick={() => selectCharacter(1)} imgSrc={"./assets/images/People-01.svg"} width={"25%"} height={"auto"} xpos={"0px"} ypos={"0px"}/>
            <InteractiveObject onClick={() => selectCharacter(2)} imgSrc={"./assets/images/People-02.svg"} width={"25%"} height={"auto"} xpos={"0px"} ypos={"0px"}/>
            <InteractiveObject onClick={() => selectCharacter(3)} imgSrc={"./assets/images/People-03.svg"} width={"25%"} height={"auto"} xpos={"0px"} ypos={"0px"}/>
            <InteractiveObject onClick={() => selectCharacter(4)} imgSrc={"./assets/images/People-04.svg"} width={"25%"} height={"auto"} xpos={"0px"} ypos={"0px"}/>
        </Container>
    )
}

export default Intro;