import { ProjectCard } from "../components/ProjectCard";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Popup from "../components/Popup/PopUpCreateProject";
import Popup2 from "../components/Popup/PopUpDetails";
import FormPage from "./NewProject/Formpage";
import SearchIcon from "@mui/icons-material/Search";
import { HeroContainer } from "../components/HeroSection/HeroElements";
import { ProjectDetails } from "../components/ProjectDetail/projectDetails";

const PageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectWrapper = styled.div`
  border-radius: 10px;
  filter: drop-shadow(0 5px 10px 0 #ffffff);
  height: 180px;
  background-color: #fff;
  /* position: relative; */
  /* z-index: 0; */
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  margin-top: 15px;
  width: 700px;
`;

const TitleWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
  padding: 10px;
  text-align: left;
  font-size: 1.5rem;
  color: #000
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 50px;
  border-radius: 10px;
  position: relative;
  

  input {
    width: 70%;
    border: 2px solid #cccccc;
    padding: 10px;
    outline: none;
    font-size: 0.8rem;
    cursor: pointer;
  }

  svg {
    color: white;
    background-color: rgba(6, 114, 203, 1);
    padding: 7px;
    cursor: pointer;
  }

  select {
    width: 60%;
    padding: 10px;
    font-size: 0.8rem;
    color: #999999;
    border: 2px solid #cccccc;
    background-color: transparent;
    margin-left: 40px;
    cursor: pointer;
  }

  select:hover {
    cursor: pointer;
  }

  select:focus {
    outline: none;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0.4rem;
  padding: 0;
  color: #000
`;

const Stats = styled.h3`
  font-size: 0.9rem;
  margin-left: 10px;
  margin: 0.4rem;
  padding: 2px;
  display: inline-block;
  border: 2px solid;
  border-radius: 5px;
    color: #000
  ${(props) =>
    props.status === "In progress" &&
    `
    border-color: orange;
    color: orange;
  `}
  ${(props) =>
    props.status === "Recruiting" &&
    `
    border-color: green;
    color: green;
  `}
  ${(props) =>
    props.status === "finalizado" &&
    `
    border-color: red;
    color: red;
  `}
`;
const StyledButton = styled.button`
  background-color: #0672cb;
  border-radius: 2px;
  color: #ffffff;
  padding: 10px 30px;
  border: none;
  text-align: center;
  width: auto;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const Description = styled.div`
  font-size: 0.8rem;
  margin-left: 10px;
  margin: 0.4rem;
  padding: 0;
  color: #000
`;

const Tag = styled.div`
  font-size: 0.7rem;
  margin-left: 10px;
  padding: 5px;
  border: 1px solid #5cc1ee;
  color: #0063b8;
  background-color: #d9f5fd;
  border-radius: 10px;
  display: inline-block;
  box-sizing: border-box;
`;

const baseUrl = "http://localhost:3000/";

export const ProjectsPage = () => {
  const [projetos, setProjeto] = useState([]);

  const [buttonPopup, setButtonPopup] = useState(false);

  const [projectPopup, setProjetctPopup] = useState(false);

  useEffect(() => {
    axios.get(baseUrl + "projeto").then((response) => {
      setProjeto(response.data);
    });
  }, []);
  console.log(projetos)

  return (
    <>
      <HeroContainer>
        <PageContainer>
          <TitleWrapper>
            <div>Explore os projetos disponíveis</div>
          </TitleWrapper>
          <SearchInput>
            <input placeholder="Pesquise projetos"></input>
            <SearchIcon />
            <select placeholder="Filtrar por">
              <option value="opcao0"></option>
              <option value="opcao1">React</option>
              <option value="opcao2">Java</option>
              <option value="opcao3">UX Design</option>
            </select>
          </SearchInput>
          <StyledButton onClick={() => setButtonPopup(true)}>
            Add project
          </StyledButton>
          <Popup trigger={buttonPopup} toggle={() => setButtonPopup(!buttonPopup)}>
            <primeiroplano>
              <FormPage></FormPage>
            </primeiroplano>
          </Popup>
          {projetos.map((item) => {
            return (
              <>
                <ProjectWrapper onClick={() => setProjetctPopup(true)}>
                  <ProjectCard
                    title={<Title>{item.nome}</Title>}
                    stats={
                      <Stats
                        style={{
                          borderColor:
                            item.stats === "In progress"
                              ? "orange"
                              : item.stats === "Recruiting"
                                ? "green"
                                : "red",
                          color:
                            item.stats === "In progress"
                              ? "orange"
                              : item.stats === "Recruiting"
                                ? "green"
                                : "red",
                        }}
                      >
                        {item.stats}
                      </Stats>
                    }
                    description={<Description>{item.descricao}</Description>}
                    tag={<Tag>{item.duracao}</Tag>}
                  />
                </ProjectWrapper>
                <Popup2 trigger={projectPopup} toggle={() => setProjetctPopup(!projectPopup)}>
                  <primeiroplano>
                    <ProjectDetails />
                  </primeiroplano>
                </Popup2>
              </>
            );
          })}
        </PageContainer>
      </HeroContainer>
    </>
  );
};