import React from "react";
import * as Styled from "./styled";

const Message = (props) => {
    return (
        <Styled.MessageText fontSize={props.fontSize}>{props.messageText}</Styled.MessageText>
    )
}

export default Message;