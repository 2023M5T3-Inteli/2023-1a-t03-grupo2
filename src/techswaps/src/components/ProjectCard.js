import styled from "styled-components";

export const projectCard = styled.div`
  border-radius: 10px;
  filter: drop-shadow(0 5px 10px 0 #ffffff);
  width: 400px;
  height: 180px;
  background-color: #ffffff;
  padding: 20px;
  position: relative;
  z-index: 0;
  overflow: hidden;
  transition: 0.6s ease-in;
`;

export const ProjectCard = ({ title, stats, description, tag }) => {
  return (
    <>
      <projectCard>
          <div>
            <p className="font-size: 1em ">{title}</p>
            <p>{stats}</p>
            <p>{description}</p>
            <p>{tag}</p>
          </div>
      </projectCard>
    </>
  );
};
