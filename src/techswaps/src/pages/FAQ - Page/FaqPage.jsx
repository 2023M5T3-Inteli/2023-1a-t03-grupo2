//Página de renderização dos componentes
import Heading from './Sub-itens/Heading.jsx';
import SearchBar from './Sub-itens/SearchBar.jsx';
import Chevron from './Sub-itens/Chevron.jsx';
import {HeroContainer, HeroBg} from './Sub-itens/FaqStyle.jsx';
//import './Sub-itens/SearchBar.css';

function MainPage() {
    return (
      <>
      <HeroContainer>
        <HeroBg>          
          <Heading></Heading>
          {/* Tente quebrar a linha, dando espaço entre o título e a barra de pesquisa */}
          <SearchBar></SearchBar>
          <Chevron></Chevron>         
          
        </HeroBg>
            
      </HeroContainer>

      </>    
    )
  }
 
  export default MainPage;