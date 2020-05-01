import React, {useState, useEffect} from "react";
import * as Styled from "./styled";


const ModelViewerObject = (props) => {


    const [selectedHotspotId, setSelectedHotspotId] = useState(null);

    useEffect(() => {
        if(props.initialHotspot){
            setSelectedHotspotId(props.initialHotspot);
        }else{
            if(selectedHotspotId === null){
                setSelectedHotspotId(0);
            }
        }
        return () => {
            
        }
    }, [props.initialHotspot, selectedHotspotId])

    const selectHotspot = (hotspotId) => {
        if(selectedHotspotId === hotspotId){
            return;
        }
        setSelectedHotspotId(hotspotId);
        console.log("You just selected hotspot "+hotspotId);
        console.log(selectedHotspotId);
    }

    return (
        <Styled.Container>
            <model-viewer width={"100%"} ar camera-controls src={"./assets/models/stethescope.gltf"} alt="This is a 3D model">
                {props.hotspots.map((hotspot, index) => 
                    <Styled.Hotspot onClick={() => {selectHotspot(index)}} slot={"hotspot-"+index} className="hotspot" className={selectedHotspotId === hotspot.id ? "hotspot selected" : "hotspot"} data-position={hotspot.position} data-normal={hotspot.normal}><Styled.Annotation>{hotspot.text}</Styled.Annotation></Styled.Hotspot>
                )}
                <Styled.ARButton slot="ar-button">
                    <img src="./assets/images/AR.svg"/>
                </Styled.ARButton>
            </model-viewer>
        </Styled.Container>
    )
}

export default ModelViewerObject;