import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styled from "./styled";

const IconButton = (props) => {
    return (
        <Styled.IconButtonContainer onClick={props.onClick} marginRect={props.marginRect}>
            <FontAwesomeIcon color="#ffffff" size={"2x"} icon={props.icon}/>
        </Styled.IconButtonContainer>
    )
}

export default IconButton;