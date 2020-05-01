import React, { useState } from 'react';
import './App.css';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSyncAlt, faChevronCircleRight, faChevronCircleLeft, faCheckCircle, faInfo } from "@fortawesome/free-solid-svg-icons";
import Scene from "./components/Scene/Scene";
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

const StyledLogo = styled.img`
  width: 100%;
  height:100%;
`;


function App() {
  const [selectedCharacter, setSelectedCharacter] = useState({}); //The string/path for the selected character image.
  const [currentSceneId, setCurrentSceneId] = useState(0); //Used to denote the scene by its' ID.
  const [viewingObject, setViewingObject] = useState(false); //Used to tell if there is an object being viewed, show viewing panel.
  const [selectedObject, setSelectedObject] = useState(0); //The ACTUAL object being viewed.
  const [currentQuestionId, setCurrentQuestionId] = useState(0); //QuestionId to get from questionslist.

  const charactersList = [
      {
        img: "./assets/images/people-01.svg",
        name: "Lloyd",
        prof: "Doctor",
        gender: "m",
        position: {x:"0px", y:"40px"}
      },
      {
        img: "./assets/images/people-02.svg",
        name: "Jane",
        prof: "Nurse",
        gender: "f",
        position: {x:"0px", y:"30px"}
      },
      {
        img: "./assets/images/people-03.svg",
        name: "Sara",
        prof: "Doctor",
        gender: "f",
        position: {x:"0px", y:"25px"}
      },
      {
        img: "./assets/images/people-04.svg",
        name: "Kayleigh",
        prof: "Nurse",
        gender: "f",
        position: {x:"0px", y:"10px"}
      }
    ];

  const objectsList = [
    {
      name: "Kit Bag",
      img: "./assets/images/DrBag.svg",
      position: {x: "29px", y: "215px"},
      width: "80px",
      id: 0
    },
    {
      name: "Medicine",
      img: "./assets/images/Medicine.svg",
      position: {x: "710px", y: "57px"},
      width: "20px",
      id: 1
    },
    {
      name: "Microscope",
      img: "./assets/images/Microscope.svg",
      position: {x: "569px", y: "109px"},
      width: "34px",
      id: 2
    },
    {
      name: "Stethoscope",
      img: "./assets/images/Stethoscope.svg",
      position: {x: "640px", y: "149px"},
      width: "70px",
      id: 3
    },
    {
      name: "Syringe",
      img: "./assets/images/Syringe.svg",
      position: {x: "500px", y: "144px"},
      width: "50px",
      id: 4
    },
    {
      name: "Test Tubes",
      img: "./assets/images/TestTubes.svg",
      position: {x: "636px", y: "17px"},
      width: "30px",
      id: 5
    },
    {
      name: "Thermometer",
      img: "./assets/images/Thermometer.svg",
      position: {x: "407px", y: "193px"},
      width: "60px",
      id: 6
    },
    {
      name: "Plaster",
      img: "./assets/images/Plaster.svg",
      position: {x: "420px", y: "145px"},
      width: "20px",
      id: 7
    }
  ];

  const modelsList = [
    {
      name: "Stethoscpoe",
      id: 3,
      model: "./assets/models/stethescope.gltf",
      hotspots: [
        {
          id: 0,
          name: "fact",
          position: "3.677384827359253m -0.2472029312234838m 8.890203554547575m",
          normal: "0.08766884984280378m -0.9438745001877323m 0.318457376524078m",
          text: `The word stethoscope is actually a Greek word that simply means "I see the chest"`,
          audio: "audio track to play here"
        },
        {
          id: 1,
          name: "fact",
          position: "1.2183017240716496m 0.3070601693620567m -6.646682736388396m",
          normal: "0.5838613128714414m 0.731809499772719m 0.35151219520016597m",
          text: "The very first Stethoscope was a monaural device, meaning it was used with just one ear.",
          audio: "audio track to play here"
        },
        {
          id: 2,
          name: "fact",
          position: "10.107813664801204m -0.43046056471759186m 13.99390251610063m",
          normal: "-0.09713558713884479m 0.9944575583593681m -0.040234839792345996m",
          text: "The original use of the Stethoscope was simply to determine if someone was dead or not!",
          audio: "audio track to play here"
        }
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
  ];

  const successText = "Correct!";
  const failText = "Incorrect.";

  const questionsList = [
    {
      id: 0,
      questionText: `Listen to your heart-beat?`,
      answerText: `A Stethoscope can help ${selectedCharacter.prof} ${selectedCharacter.name} hear your heart-beat.`
    },
    {
      id: 1,
      questionText: `Cover an open wound or cut?`,
      answerText: `A Plaster is used to keep an open wound clean and safe.`
    },
    {
      id: 2,
      questionText: `Look in your ears?`,
      answerText: `bla blah blah`
    }
  ]
  
  const selectCharacter = (charObject) => {
    setSelectedCharacter(charObject);
    setCurrentSceneId(2);
  }

  const getCurrentScene = () => {
    return scenesList[currentSceneId];
  }
  
  const selectObject = (objectId) => {
    setSelectedObject(objectId);
    setViewingObject(true);
    setCurrentSceneId(4);
  }

  const getSelectedObject = () => {
    return modelsList.find(model => model.id === selectedObject.id);
  }

  const getCurrentQuestion = () => {
    return questionsList[currentQuestionId];
  }

  const IntroScene = (props) => {
   return(
     <Scene id={props.Id} isActive={true} sceneColour={"#00A8A9"}>
      <Panel isVisible={true} width="80%" height="70%">
        {charactersList.map((char, index) => 
          <InteractiveObject key={index} objID={index} onClick={()=>{selectCharacter(char)}} imgSrc={char.img} width={"19%"} height={"auto"} xpos={8+(22*index)+"%"} ypos={char.position.y}/>
        )}
      </Panel>
      <Panel marginRect={"-30px 0 0 0"} isVisible={true} bgColour={"#0C2A49"} height={"14%"} width={"70%"}>
        <Message fontSize={"medium"} messageText={getCurrentScene().messageText}/>
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
        <StaticObject imgSrc={"./assets/images/Background-01.svg"} width={"100%"} height={"100%"} xpos={"0px"} ypos={"0px"} zindex={"0"}/>
        <Panel isVisible={true} bgColour={"#0C2A49"} height={"20%"} width={"90%"} marginRect={"40% 0 0 0"}>
          <Message fontSize={"medium"} messageText={getCurrentScene().messageText}/>
          <IconButton icon={"chevron-circle-right"} marginRect={"0 0 0 10px"} onClick={() => {setCurrentSceneId(3)}}/>
        </Panel>
        <StaticObject zindex={20} imgSrc={selectedCharacter.img} width={"30%"} height={"100%"} xpos={"-8px"} ypos={"90px"}/>
      </>
    )
  }


  const FindScene = () => {
    return (
      <>
        {objectsList.map((obj, index) => 
          <InteractiveObject onClick={() => selectObject(obj.id)} key={index} imgSrc={obj.img} width={obj.width} height={"auto"} xpos={obj.position.x} ypos={obj.position.y} zindex={"1"}/>
        )}
        <StaticObject imgSrc={"./assets/images/Background-01.svg"} width={"100%"} height={"100%"} xpos={"0px"} ypos={"0px"} zindex={"0"}/>
        <Panel direction={"column"} isVisible={!viewingObject} bgColour={"#0C2A49"} height={"20%"} width={"90%"} marginRect={"40% 0 0 0"}>
          <Message fontSize={"small"} messageText={getCurrentScene().messageText}/>
          <Message bold={true} fontSize={"medium"} messageText={getCurrentQuestion().questionText}/>
        </Panel>
        <StaticObject isVisible={!viewingObject} zindex={20} imgSrc={selectedCharacter.img} width={"30%"} height={"100%"} xpos={"-8px"} ypos={"90px"}/>
      </>
    )
  }

  const LogoScene = () => {
    return (
      <StyledLogo onClick={()=> {
        setCurrentSceneId(1);
      }} src="./assets/images/DrWhatJnr_Intro-01.jpg" />
    );
  }

  const SuccessScene = () => {
    return (
      <>
        <Panel width={"90%"} height={"80%"} isVisible={true}>
          <ModelViewerObject hotspots={modelsList[0].hotspots}/>
        </Panel>
        <Panel pointerNone={true} direction={"column"} isVisible={true} bgColour={"#0C2A49"} height={"20%"} width={"75%"} marginRect={"-80px 0 0 0"} >
          <Message messageText={successText} bold={true} textColour={"#64C9C9"} />
          <Message messageText={getCurrentQuestion().answerText} fontSize={"small"}/>
        </Panel>
      </>
    );
  }


  const scenesList = [
    {
      sceneContent: <LogoScene/>,
      sceneColour: "#0C2A49",
      sceneId: 0,
      messageText: "Who would you like to help today?"
    },
    {
      sceneContent: <IntroScene/>,
      sceneColour: "#00A8A9",
      sceneId: 1,
      messageText: "Who would you like to help today?"
    },
    {
      sceneContent: <DoctorScene/>,
      sceneColour: "#0C2A49",
      sceneId: 2,
      messageText: `Let's help ${selectedCharacter.prof} ${selectedCharacter.name}!`
    },
    {
      sceneContent: <FindScene/>,
      sceneColour: "#0C2A49",
      sceneId: 3,
      messageText: `Can you find something that ${selectedCharacter.prof} ${selectedCharacter.name} would use to `,
    },
    {
      sceneContent: <SuccessScene/>,
      sceneColour: "#3ABBBB",
      sceneId: 4
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
        {scenesList.map((scene, index) =>
          <Scene key={index} sceneColour={scene.sceneColour} Id={scene.sceneId} isActive={currentSceneId === scene.sceneId}>
            {scene.sceneContent}
          </Scene>
        )}
      </DisplayInLandscapeOnly>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
