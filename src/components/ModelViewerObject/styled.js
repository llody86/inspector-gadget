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
    border: 2px solid #D4177D;
    background-color: white;
    box-sizing: border-box;

    :not(:defined) > * {
        display: none;
    }

    &.selected {
        background-color: #D4177D;
        border: 2px solid white;
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
    background-color: #c7ffff;
    position: absolute;
    transform: translate(10px, 10px);
    color: #0B2A49;
    font-family: "Muli", sans-serif;
    border-radius: 10px;
    padding: 10px;
    padding: 10px;
    width: 150px;
    height: auto;
`