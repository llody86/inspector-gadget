import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import TrackList from "../TrackList/TrackList"

const Scene = (props) => {
    //const [isActive, setIsActive] = useState(false);
    //TODO: AUDIO
    //TODO: TRANSITIONS
    
    useEffect(() => {
        //effect
        if(props.isActive) {
            initScene();
        }
        return () => {
            killScene();
        }
    }, []);

    const initScene = () => {
        //TODO: AUDIO and other inits
    }

    const killScene = () => {
        //if any audio, kill it.
        //if any animation, kill it.
        //kill all listeners etc.
    }

    return (
        <Styled.SceneContainer align={props.align} isActive={props.isActive} colour={props.sceneColour ? props.sceneColour : "transparent"}>
            {props.children}
            {//TODO: Add a track list
            }
        </Styled.SceneContainer>
    )
}

export default Scene;