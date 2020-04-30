import React from "react";
import { StaticObject, StaticGroup } from "../StaticObject/StaticObject";
import InteractiveObject from "../InteractiveObject/InteractiveObject";

const Room = (props) => {
    return (
        <>
            <StaticGroup width={"100%"} height={"100%"} xpos={"0px"} ypos={"0px"} zindex={"1"}>
                <InteractiveObject onClick={() => alert("blah")} imgSrc={"./assets/images/DrBag.svg"} width={"5%"} height={"auto"} xpos={"500px"} ypos={"0px"}/>
            </StaticGroup>
            <StaticGroup width={"100%"} height={"100%"} xpos={"0px"} ypos={"0px"} zindex={"0"}>
                <StaticObject imgSrc={"./assets/images/BlockBackground-01-01.svg"} width={"100%"} height={"100%"} xpos={"0px"} ypos={"0px"} zindex={"0"}/>
                <StaticObject imgSrc={"./assets/images/DetailBackground-01.svg"} width={"100%"} height={"100%"} xpos={"0px"} ypos={"0px"} zindex={"0"}/>
            </StaticGroup>
        </>
    )
}

export default Room;