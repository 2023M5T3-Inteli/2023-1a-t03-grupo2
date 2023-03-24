import styled from "styled-components";

const projectCard = styled.div`
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
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const titleCard = styled.p`
`;

const LeftColumn = styled.div`
`;

const RightColumn = styled.div`
`;


export const ProjectCard = ({ title, stats, description, tag }) => {
  return (
    <>
      <projectCard>
        <div>
          <LeftColumn>
            <p className="font-size: 1em ">{title}</p>
            <p>{description}</p>
          </LeftColumn>
          <RightColumn>
            <p>{stats}</p>
            <p>{tag}</p>
          </RightColumn>
        </div>
      </projectCard>
    </>
  );
};
