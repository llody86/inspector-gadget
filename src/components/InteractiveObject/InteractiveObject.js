import React from "react";
import * as Styled from "./styled";

const InteractiveObject = (props) => {
    return (
        <Styled.InteractiveObject id={props.id} xpos={props.xpos} ypos={props.ypos} width={props.width} height={props.height} onClick={props.onClick} zindex={props.zindex}>
            <Styled.InteractiveObjectImage alt="this is an image" src={props.imgSrc}/>
        </Styled.InteractiveObject>
    )
}

export default InteractiveObject;