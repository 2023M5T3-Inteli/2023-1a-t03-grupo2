import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components'
import { ReactDOM } from 'react';


const Background = styled.div`
  width: 100vw;
  height:100vh;
  background-color: rgba(255,255,255, 0.8); 
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 2%;



`;


const Modal = ({isOpen, close }) => {
  
  if (!isOpen) return null
   
  return (
  
  <Background>
    <Content>
      
    </Content>
  </Background>
  );
};



export default Modal;