// import React, { useState } from 'react';
// import styled from 'styled-components';


// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');


//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };


//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     // implement your search function here
//   };


//   return (
//     <SearchContainer>
//       <form onSubmit={handleSearchSubmit}>
//         <SearchInput
//           type="text"
//           placeholder="Search by keyword, topic or project"
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <SearchButton type="submit">Search</SearchButton> 
//         {/* Trocar acima por ícone de busca  */}
//       </form>
//     </SearchContainer>
//   );
// };


// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;


// const SearchInput = styled.input`
//   padding: 10px;
//   font-size: 16px;
//   border: none;
//   border-radius: 4px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//   outline: none;
//   margin-right: 10px;
// `;


// const SearchButton = styled.button`
//   background-color: #326BF5;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   padding: 10px 20px;
//   cursor: pointer;
//   outline: none;
// `;


// export default SearchBar;



import React, { useState } from 'react';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // implement your search function here
  };


  return (
    <SearchContainer>
      <form onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          placeholder="Search by keyword, topic or project"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <SearchButton type="submit">
          {/* <FontAwesomeIcon icon={faSearch} /> */}
        </SearchButton> 
      </form>
    </SearchContainer>
  );
};


const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;


const SearchInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: none;
  border-radius: 1px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  outline: none;
  margin-right: 10px;
  width: 255px;
  display: 'flex';
  justify-content: 'center';
  height: 15px;
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
 
`;

// const SearchContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const SearchInputContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const SearchInput = styled.input`
//   padding: 10px;
//   font-size: 16px;
//   border: none;
//   border-radius: 4px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//   outline: none;
//   margin-right: 10px;
//   width: 250px;
// `;

// const SearchBar = () => {
//   return (
//     <SearchContainer>
//       <SearchInputContainer>
//         <SearchInput
//           type="text"
//           placeholder="Search by keyword, topic or project"
//         />
//         <SearchButton type="submit">Search</SearchButton>
//       </SearchInputContainer>
//     </SearchContainer>
//   );
// };


const SearchButton = styled.button`
  background-color: #326BF5;
  color: white;
  border: none;
  border-radius: 1px;
  font-size: 15px;
  height: 36px;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
`;

export default SearchBar;
