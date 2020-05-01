import React from "react";
import * as Styled from "./styled";

const Message = (props) => {
    return (
        <Styled.MessageText textColour={props.textColour} bold={props.bold} fontSize={props.fontSize}>{props.messageText}</Styled.MessageText>
    )
}

export default Message;