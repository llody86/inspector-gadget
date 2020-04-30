import React from "react"
import * as Styled from "./styled";


const Panel = (props) => {
    return (
        <Styled.Panel marginRect={props.marginRect} bgColour={props.bgColour} width={props.width} height={props.height} isVisible={props.isVisible}>
            {props.children}
        </Styled.Panel>
    )
}

export default Panel;