import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MeuContainer from './pages/Home';
import Reconhecimento from './pages/Reconhecimento';
import FormPage from './pages/NewProject/Formpage';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import ProporProjeto1 from './pages/Propor Projeto - Page/Sub-itens/Propor1';
import ProporProjeto2 from './pages/Propor Projeto - Page/Sub-itens/Propor2';
import ProporProjeto3 from './pages/Propor Projeto - Page/Sub-itens/Propor3';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectsPage } from './pages/ProjectsPage';
import MainPage from './pages/FAQ - Page/FaqPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<FormPage />} />
        <Route path="projetos" element={<ProjectsPage  />} />
        <Route path="reconhecimento" element={<Reconhecimento />} />
        <Route path="faq" element={<MainPage />} />
        <Route path= "projetos1" element={<ProporProjeto1/>}/>
        <Route path= "projetos2" element={<ProporProjeto2/>}/>
        <Route path= "projetos3" element={<ProporProjeto3/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
