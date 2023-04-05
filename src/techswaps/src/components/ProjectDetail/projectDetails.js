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
                        <Title>Project Title</Title>
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
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

                    </ContentLeft>
                    <ContentRight>
                        <Text>Details</Text>
                        <DetailsBox>
                            <DetailsAgroup>
                                <BlueTextDetails>Owner:</BlueTextDetails>
                                <TextDetails>Joao Antonio</TextDetails>
                            </DetailsAgroup>
                            <DetailsAgroup>
                                <BlueTextDetails>Co-owner:</BlueTextDetails>
                                <TextDetails>Joao Antonio</TextDetails>
                            </DetailsAgroup>
                            <DetailsAgroup>
                                <BlueTextDetails>Project area:</BlueTextDetails>
                                <TextDetails>Automations</TextDetails>
                            </DetailsAgroup>
                            <DetailsAgroup>
                                <BlueTextDetails>Delivery date:</BlueTextDetails>
                                <TextDetails>27/07/2023</TextDetails>
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

