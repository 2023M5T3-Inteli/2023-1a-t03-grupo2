import React from 'react'
import styled from 'styled-components'

const ContainerPrincipal = styled.div`
    height: auto;
    width: 1000px;
`


const HeadTop = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; /* primeira coluna ocupa 1/3 e segunda coluna ocupa 2/3 da largura total */
    grid-gap: 20px; /* espaçamento entre as colunas */
    margin-top: 30px;
`;

const ContentDetails = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr; /* primeira coluna ocupa 1/3 e segunda coluna ocupa 2/3 da largura total */
    grid-gap: 20px; /* espaçamento entre as colunas */
    margin-top: 30px;
`;

const ContentLeft = styled.div`
    
`;
const ContentRight = styled.div`
    
`;

const Title = styled.h1`
    
    color: black;
    margin: 10px;
    font-size: 32px;
    
`;

const Text = styled.h3`
    color: black;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
`;

const BlueText = styled.h3`
    color: #1282D6;
    font-weight: 600;
`;

const BlueTextDetails = styled.h3`
    color: #1282D6;
    font-weight: 600;
    font-size: 15px;
    margin: 5px;
`;

const TextDetails = styled.h3`
    color: black;
    font-weight: 300;
    font-size: 16px;
    margin: 0px;
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

const DetailsBox = styled.div`
    margin: 10px;
    height: auto;
    width:100%;
    border: 1px solid gray;
    padding: 10px;

`;

const DetailsAgroup = styled.div`

    margin-bottom: 30px;
`;




export const ProjectDetails = () => {
    return (
        <>
            <ContainerPrincipal>


                <HeadTop>
                    <ContentLeft>
                        <Title>Customer Support Center</Title>
                    </ContentLeft>
                    <ContentRight>
                        <StyledButton>Apply for the project</StyledButton>
                        <StyledButton>
                           Apply as Shadow
                        </StyledButton>


                    </ContentRight>
                </HeadTop>
                <ContentDetails>
                    <ContentLeft>
                        <BlueText>Project start date: 22/04/2023</BlueText>
                        <Text>Dell Technologies is developing an innovative customer support center with the goal of providing our customers with an exceptional and efficient support experience. The project will be built using the React framework, which will allow for a fast and intuitive user interface, as well as efficient management of the support center.
We are looking for technology professionals from Dell who have a passion for high-quality software solutions and who wish to be involved in a challenging and rewarding project. If you have experience with React and are looking for an opportunity to apply your skills in a dynamic and collaborative team environment, then this is the perfect opportunity for you.
As a member of the development team, you will have the chance to work closely with other Dell professionals, including UX designers, product managers, and software engineers, to create a revolutionary customer support solution.
If you are excited about the opportunity to be part of this project and help improve our customer's experience, submit your application today. We are eager to receive your application and learn more about your skills and experience.</Text>

                    </ContentLeft>
                    <ContentRight>
                        <Text>Details</Text>
                        <DetailsBox>
                            <DetailsAgroup>
                                <BlueTextDetails>Owner:</BlueTextDetails>
                                <TextDetails>Alexandre Fonseca</TextDetails>
                            </DetailsAgroup>
                            <DetailsAgroup>
                                <BlueTextDetails>Co-owner:</BlueTextDetails>
                                <TextDetails>Matheus Santos</TextDetails>
                            </DetailsAgroup>
                            <DetailsAgroup>
                                <BlueTextDetails>Project area:</BlueTextDetails>
                                <TextDetails>Automations</TextDetails>
                            </DetailsAgroup>
                            <DetailsAgroup>
                                <BlueTextDetails>Delivery date:</BlueTextDetails>
                                <TextDetails>27/06/2023</TextDetails>
                            </DetailsAgroup>
                            <DetailsAgroup>
                                <BlueTextDetails>Tags:</BlueTextDetails>

                            </DetailsAgroup>
                            

                        </DetailsBox>

                    </ContentRight>

                </ContentDetails>

            </ContainerPrincipal>
        </>
    )
}

