import React from "react";
import * as Styled from "./styled";

const StaticObject = (props) => {
    return (
        <Styled.StaticObject alt="this is an image" isVisible={props.isVisible} xpos={props.xpos} ypos={props.ypos} width={props.width} height={props.height} src={props.imgSrc} zindex={props.zindex}/>
    )
}

const StaticGroup = (props) => {
    return(
        <Styled.StaticGroup isVisible={props.isVisible} xpos={props.xpos} ypos={props.ypos} width={props.width} height={props.height} zindex={props.zindex}>
            {props.children}
        </Styled.StaticGroup>
    )
}

export { StaticObject, StaticGroup} ;