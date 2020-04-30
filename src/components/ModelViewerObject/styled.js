import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;

    * {
        width: 100%;
        height: 100%;
    }
   
`;

export const Hotspot = styled.button`
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: none;
    background-color: blue;
    box-sizing: border-box;

    &[slot="hotspot-hand"] {
        --min-hotspot-opacity: 0;
        background-color: red;
    }
    &[slot="hotspot-foot"]:not([data-visible]) {
        background-color: transparent;
        border: 3px solid blue;
    }
    :not(:defined) > * {
        display: none;
    }

    &.selected {
        background-color:white;
        p {
            display: block;
        }
    }
    &:not(.selected) {
        background-colour: #00A8A9;
        div {
            display:none;
        }
    }
`;

export const Annotation = styled.div`
    background-color: #888888;
    position: absolute;
    transform: translate(10px, 10px);
    border-radius: 10px;
    padding: 10px;
`