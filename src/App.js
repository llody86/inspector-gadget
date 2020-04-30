import React, { useContext, useState } from 'react';
import './App.css';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSyncAlt, faChevronCircleRight, faChevronCircleLeft, faCheckCircle, faInfo } from "@fortawesome/free-solid-svg-icons";
import Scene from "./components/Scene/Scene";
import { AudioPlayerContext, AudioPlayerProvider } from "./context/AudioPlayerContext";
import Panel from "./components/Panel/Panel"
import InteractiveObject from './components/InteractiveObject/InteractiveObject';
import Message from './components/Message/Message';
import { StaticObject, StaticGroup } from './components/StaticObject/StaticObject';
import IconButton from "./components/IconButton/IconButton";
import ModelViewerObject from './components/ModelViewerObject/ModelViewerObject';

library.add(faSyncAlt, faChevronCircleRight, faChevronCircleLeft, faCheckCircle, faInfo);


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #111b32;
  justify-content: center;
  align-items: center;
  font-family: 'Muli', sans-serif;
`;

const AppAlertMessageContainer = styled.div`
  width: 100%;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  text-align: center;
  display: none;
  @media screen and (orientation:portrait){
    display: flex;
  }
`;

const DisplayInLandscapeOnly = styled.div`
  display: none;
  @media screen and (orientation:landscape){
    display: flex;
    width: 100%;
  }
`;

const AppHeader = styled.header`
  width: 100%;
  height: 100%;
  display:flex;
  flex-directoin: column;
  justify-content: center;
  align-items: center;
  background-color: #111b32;
  overflow: hidden;
  position: relative;
`;

const AppAlertMessage = styled.p`
  padding: 20px;
  font-size: 2rem;
`

const InfoContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  background-colour: #111b32;
  border-radius: 10px;
  color: white;
`

const AbsoluteContainer = styled.div`
  width:100%;
  height:100%;
  position: absolute;
  z-index: ${props => props.zindex};
  justify-content: center;
  align-items: center;
  display: ${props => props.isVisible ? "flex" : "none"};
`;


function App() {
  // const [state, setState] = useContext(AudioPlayerContext);//TODO: AUDIO
  const [selectedCharacter, setSelectedCharacter] = useState({}); //The string/path for the selected character image.
  const [currentSceneId, setCurrentSceneId] = useState(0); //Used to denote the scene by its' ID.
  const [viewingObject, setViewingObject] = useState(false); //Used to tell if there is an object being viewed, show viewing panel.
  const [selectedObject, setSelectedObject] = useState(0); //The ACTUAL object being viewed.

  const charactersList = [
      {
        img: "./assets/images/People-01.svg",
        name: "Lloyd",
        prof: "Doctor",
        position: {x:"0px", y:"40px"}
      },
      {
        img: "./assets/images/People-02.svg",
        name: "Jane",
        prof: "Nurse",
        position: {x:"0px", y:"35px"}
      },
      {
        img: "./assets/images/People-03.svg",
        name: "Sara",
        prof: "Doctor",
        position: {x:"0px", y:"30px"}
      },
      {
        img: "./assets/images/People-04.svg",
        name: "Kayleigh",
        prof: "Nurse",
        position: {x:"0px", y:"20px"}
      }
    ];

  const objectsList = [
    {
      name: "Kit Bag",
      img: "./assets/images/DrBag.svg",
      position: {x: "80px", y: "300px"},
      width: "80px",
      id: 0
    },
    {
      name: "Medicine",
      img: "./assets/images/Medicine.svg",
      position: {x: "690px", y: "147px"},
      width: "20px",
      id: 1
    },
    {
      name: "Microscope",
      img: "./assets/images/Microscope.svg",
      position: {x: "690px", y: "185px"},
      width: "40px",
      id: 2
    },
    {
      name: "Stethoscope",
      img: "./assets/images/Stethoscope.svg",
      position: {x: "600px", y: "230px"},
      width: "70px",
      id: 3
    },
    {
      name: "Syringe",
      img: "./assets/images/Syringe.svg",
      position: {x: "410px", y: "232px"},
      width: "50px",
      id: 4
    },
    {
      name: "Test Tubes",
      img: "./assets/images/TestTubes.svg",
      position: {x: "630px", y: "110px"},
      width: "30px",
      id: 5
    },
    {
      name: "Thermometer",
      img: "./assets/images/Thermometer.svg",
      position: {x: "420px", y: "276px"},
      width: "60px",
      id: 6
    },
    {
      name: "Clock",
      img: "./assets/images/Clock.svg",
      position: {x: "420px", y: "50px"},
      width: "100px",
      id: 7
    },
    {
      name: "Plaster",
      img: "./assets/images/Plaster.svg",
      position: {x: "0px", y: "0px"},
      width: "20px",
      id: 8
    }
  ];

  const modelsList = [
    {
      name: "Stethoscpoe",
      id: 3,
      model: "./assets/models/stethescope.gltf",
      hotspots: [
        {
          name: "fact-0",
          position: "1 1 0.5",
          text: "This is made from 100% bullshit",
          audio: "audio track to play here"
        },
        {
          name: "fact-1",
          position:"1 1 0.5",
          text: "This is some more text",
          audio: "audio track to play here"
        },
        {
          name: "fact-2",
          position: "1 1 0.5",
          text: "This is some different text",
          audio: "audio track to play here"
        },
      ]
    },
    {
      name: "Plaster",
      id: 8,
      model: "./assets/models/bandaid.gltf",
      hotspots: [
        {
          position: "1 1 0.5",
          text: "This is some text",
          audio: "audio track to play here"
        },
        {
          position: "1 1 0.5",
          text: "This is some more text",
          audio: "audio track to play here"
        },
        {
          position: "1 1 0.5",
          text: "This is some different text",
          audio: "audio track to play here"
        },
      ]
    }
  ]
  
  const selectCharacter = (charObject) => {
    setSelectedCharacter(charObject);
    setCurrentSceneId(1);
  }

  const getCurrentScene = () => {
    return scenesList[currentSceneId];
  }
  
  const selectObject = (objectId) => {
    setSelectedObject(objectId);
    setViewingObject(true);
  }

  const getSelectedObject = () => {
    return modelsList.find(model => model.id === selectedObject.id);
  }

  const IntroScene = (props) => {
   return(
     <Scene id={props.Id} isActive={true} sceneColour={"#00A8A9"}>
      <Panel isVisible={true} width="80%" height="60%">
        {charactersList.map((char, index) => 
          <InteractiveObject key={index} objID={index} onClick={()=>{selectCharacter(char)}} imgSrc={char.img} width={"15%"} height={"auto"} xpos={10+(22*index)+"%"} ypos={char.position.y}/>
        )}
      </Panel>
      <Panel isVisible={true} bgColour={"#0C2A49"} height={"20%"} width={"90%"}>
        <Message messageText={getCurrentScene().messageText}/>
      </Panel>
    </Scene>
   )
  };

  const DoctorScene = () => {
    return (
      <>
        <StaticGroup width={"100%"} height={"100%"} xpos={"0px"} ypos={"0px"} zindex={"1"}>
          {objectsList.map((obj,index) => 
            <StaticObject key={index} imgSrc={obj.img} width={obj.width} height={"auto"} xpos={obj.position.x} ypos={obj.position.y}/>
          )}
        </StaticGroup>
        <StaticGroup width={"100%"} height={"100%"} xpos={"0px"} ypos={"0px"} zindex={"0"}>
          <StaticObject imgSrc={"./assets/images/BlockBackground-01-01.svg"} width={"1920px"} height={"100%"} xpos={"-200px"} ypos={"0px"} zindex={"0"}/>
          <StaticObject imgSrc={"./assets/images/DetailBackground-01.svg"} width={"100%"} height={"100%"} xpos={"0px"} ypos={"40px"} zindex={"0"}/>
        </StaticGroup>
        <Panel isVisible={true} bgColour={"#0C2A49"} height={"20%"} width={"90%"} marginRect={"40% 0 0 0"}>
          <Message fontSize={"medium"} messageText={getCurrentScene().messageText}/>
          <IconButton icon={"chevron-circle-right"} marginRect={"0 0 0 10px"} onClick={() => {setCurrentSceneId(2)}}/>
        </Panel>
        <StaticObject zindex={20} imgSrc={selectedCharacter.img} width={"100%"} height={"100%"} xpos={"40%"} ypos={"90px"}/>
      </>
    )
  }


  const FindScene = () => {
    return (
      <>
        <StaticGroup width={"100%"} height={"100%"} xpos={"0px"} ypos={"0px"} zindex={"1"}>
          {objectsList.map((obj, index) => 
            <InteractiveObject onClick={() => selectObject(obj.id)} key={index} imgSrc={obj.img} width={obj.width} height={"auto"} xpos={obj.position.x} ypos={obj.position.y}/>
          )}
        </StaticGroup>
        <StaticGroup width={"100%"} height={"100%"} xpos={"0px"} ypos={"0px"} zindex={"0"}>
          <StaticObject imgSrc={"./assets/images/BlockBackground-01-01.svg"} width={"1920px"} height={"100%"} xpos={"-200px"} ypos={"0px"} zindex={"0"}/>
          <StaticObject imgSrc={"./assets/images/DetailBackground-01.svg"} width={"100%"} height={"100%"} xpos={"0px"} ypos={"40px"} zindex={"0"}/>
        </StaticGroup>
        <Panel isVisible={!viewingObject} bgColour={"#0C2A49"} height={"20%"} width={"90%"} marginRect={"40% 0 0 0"}>
          <Message fontSize={"medium"} messageText={getCurrentScene().messageText}/>
        </Panel>
      </>
    )
  }


  const scenesList = [
    {
      sceneContent: <IntroScene/>,
      sceneColour: "#00A8A9",
      sceneId: 0,
      messageText: "Who would you like to help today?"
    },
    {
      sceneContent: <DoctorScene/>,
      sceneColour: "#0C2A49",
      sceneId: 1,
      messageText: `${selectedCharacter.prof} ${selectedCharacter.name} needs some help to find their equipment.`
    },
    {
      sceneContent: <FindScene/>,
      sceneColour: "#0C2A49",
      sceneId: 2,
      messageText: `Can you find something that ${selectedCharacter.name} would use to listen to your heart-beat?`
    }
  ];

  return (
    <AppContainer className="App">
    <AppHeader>
      <AppAlertMessageContainer>
        <FontAwesomeIcon className="App-logo" color={"#3cb39f"} icon={"sync-alt"} />
        <AppAlertMessage>Please rotate your device - this experience requires landscape</AppAlertMessage>
      </AppAlertMessageContainer>
      <DisplayInLandscapeOnly>
        <AudioPlayerProvider>
            {scenesList.map((scene, index) =>
              <Scene key={index} sceneColour={scene.sceneColour} Id={scene.sceneId} isActive={currentSceneId === scene.sceneId}>
                {scene.sceneContent}
              </Scene>
            )}
            <AbsoluteContainer zindex={1} isVisible={viewingObject}>
              <Panel width={"90%"} height={"90%"} isVisible={true}>
                <ModelViewerObject />
              </Panel>
            </AbsoluteContainer>
          </AudioPlayerProvider>
            {/*<model-viewer background-color="#70BCD1" src="./assets/models/Astronaut.glb" alt="A 3D model of an astronaut" auto-rotate ar camera-controls></model-viewer>
            <model-viewer src="./assets/models/bandaid.gltf" auto-rotate ar camera-controls alt="A 3D model of a damaged sci-fi helmet"></model-viewer>
            <model-viewer src="./assets/models/stethescope.gltf" auto-rotate ar camera-controls alt="A 3D model of a damaged sci-fi helmet"></model-viewer>*/}
      </DisplayInLandscapeOnly>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
