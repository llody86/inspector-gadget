import React from "react";
import * as Styled from "./styled";


const ModelViewerObject = (props) => {
    return (
        <Styled.Container>
            <model-viewer width={"100%"} ar camera-controls src={"./assets/models/stethescope.gltf"} alt="This is a 3D model">
                <Styled.Hotspot slot="hotspot-0" className="hotspot" data-position="2.4977933328775572m 0.17634129743907678m -4.808059856680259m" data-normal="-0.37998428329062933m 0.9238788749394286m -0.04538467684981917m"><Styled.Annotation>Ear-plugs allow for listening to the patients' heart-beat</Styled.Annotation></Styled.Hotspot>
                <Styled.Hotspot slot="hotspot-1" className="hotspot" data-position="7.995677052080727m -0.4367231455871696m 13.6859952992389m" data-normal="-0.3841219746631339m 0.9094694534669415m 0.1591088363084763m"><Styled.Annotation>This is the second annotation</Styled.Annotation></Styled.Hotspot>
            </model-viewer>
        </Styled.Container>
    )
}

export default ModelViewerObject;