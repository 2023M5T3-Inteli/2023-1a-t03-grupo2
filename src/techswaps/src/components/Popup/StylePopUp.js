import styled from 'styled-components'

export const popuprince = styled.div`
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

export const popupInner = styled.div`
    position: relative;
    padding: 32px;
    width: 100%;
    max-width: 640px;
    background-color: #fff;


`;

export const closeButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: #0672CB;
    border-radius: 2px;
    color: #FFFFFF;
    padding: 10px 20px;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`;
