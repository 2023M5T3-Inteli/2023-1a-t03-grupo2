import React from "react";
import { popuprince , popupInner ,  closeButton  } from './StylePopUp'; 
import styled from 'styled-components'
import './styles.css'




function Popup(props) {
    return (props.trigger) ? (
        <div className="popuprince">
            <div className="popupInner">
                <button className="closeButton">X</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup