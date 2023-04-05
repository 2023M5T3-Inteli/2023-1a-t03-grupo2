import React from "react";
import styled from "styled-components";


const Popupprince = styled.div`
    position: fixed;
    top: 0;
    left:0;
    width:100%;
    height:100vh;
    background-color: rgba(0,0,0,0.2);
    display:flex;
    justify-content: center;
    align-items:center;
`;

const PopupInner = styled.div`
    position: relative;
    padding: 32px;
    width: 60%;
    background-color: #fff;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: #fff;
    border-radius: 2px;
    color: #0672CB;
    padding: 10px 20px;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`;

function Popup2(props) {
    return (props.trigger) ? (
        <Popupprince>
            <PopupInner>
                <CloseButton onClick={props.toggle}>Close</CloseButton>
                { props.children }
            </PopupInner>
        </Popupprince>
    ) : "";
}

export default Popup2;
