import React, { useState, useEffect } from "react";
import * as Styled from "./styled";
import Scene from "../Scene/Scene";


const SceneManager = (props) => {
    const scenes = props.scenes;
    const [sceneIndex, setSceneIndex] = useState(0);
    //TODO: isActive implementation etc.
    //TODO: AUDIO?

    useEffect(() => {
        if(props.scenes.length > 0){
            setSceneIndex(props.startSceneOverride ? props.startSceneOverride : 0);
        }else{
            console.log("No Scenes to Show...");
        }
        return () => {
            
        }
    }, []);

    const getSceneFromIndex = (index) => {
        return props.scenes[index];
    }
    
    const switchScene = (currentSceneIndex, newSceneIndex) => {
        // if(currentSceneIndex) {
            getSceneFromIndex(currentSceneIndex).killScene();
        // }
    }

    const nextScene = () => {
        if(sceneIndex >= props.scenes.length) return;

        setSceneIndex(sceneIndex++);
    }

    return (
        <Styled.SceneManager>
            {props.scenes.map((scene, index) => (
                <div key={index} >
                    {scene}
                </div>
            ))}
        </Styled.SceneManager>
    )

}

export default SceneManager;