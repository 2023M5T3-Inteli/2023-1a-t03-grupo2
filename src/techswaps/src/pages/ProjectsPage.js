import { ProjectCard } from "../components/ProjectCard";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;

const ProjectWrapper = styled.div`
  border-radius: 10px;
  filter: drop-shadow(0 5px 10px 0 #ffffff);
  height: 180px;
  background-color: #ffffff;
  position: relative;
  z-index: 0;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  margin-top: 15px;
  width: 80%;
`;

const TitleWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 10px;
  text-align: left;
  font-size: 1.5rem;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 50px;
  border-radius: 10px;
  position: relative;

  input {
    width: 70%;
    border: 2px solid #7e7e7e;
    padding: 10px;
    outline: none;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    background-color: rgba(6, 114, 203, 1);
    padding: 11.5px;
  }

  select {
    width: 30%;
    padding: 10px;
    border: 2px solid #7e7e7e;
    outline: none;
    background-color: #fff;
    font-size: 0.8rem;
    margin-left: 10px;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0.4rem;
  padding: 0;
`;

const Stats = styled.h3`
  font-size: 0.9rem;
  margin-left: 10px;
  margin: 0.4rem;
  padding: 2px;
  display: inline-block;
  border: 2px solid;
  border-radius: 5px;
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

const Description = styled.div`
  font-size: 0.8rem;
  margin-left: 10px;
  margin: 0.4rem;
  padding: 0;
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

export const ProjectsPage = () => {
  const projects = [
    {
      title: "Lightining",
      stats: "In progress",
      description: "Lorem impsu",
      tag: "python",
    },
    {
      title: "Lightining",
      stats: "In progress",
      description: "Lorem impsu",
      tag: "python",
    },
    {
      title: "Lightining",
      stats: "Recruiting",
      description: "Lorem impsu",
      tag: "python",
    },
  ];


  return (
    <PageContainer>
      <TitleWrapper>
        <div>Explore os projetos disponíveis</div>
      </TitleWrapper>
      <SearchInput>
        <input placeholder="Pesquise projetos"></input>
        <FaSearch />
        <select placeholder="Filtrar por">
          <option value="opcao0"></option>
          <option value="opcao1">React</option>
          <option value="opcao2">Java</option>
          <option value="opcao3">UX Design</option>
        </select>
      </SearchInput>
      {projects.map((item) => {
        return (
          <>
            <ProjectWrapper>
              <ProjectCard
                title={<Title>{item.title}</Title>}
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
                description={<Description>{item.description}</Description>}
                tag={<Tag>{item.tag}</Tag>}
              />
            </ProjectWrapper>
          </>
        );
      })}
    </PageContainer>
  );
};