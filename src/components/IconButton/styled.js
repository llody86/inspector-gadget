import styled from "styled-components";

export const IconButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin: ${props => props.marginRect ? props.marginRect : "0"};
`;