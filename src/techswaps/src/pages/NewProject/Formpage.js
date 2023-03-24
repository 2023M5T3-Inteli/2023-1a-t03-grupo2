import React, { useState, useEffect } from "react";
import HomeNavbar from "../../components/Navbar";
import "./FormPage.css"; //importando o arquivo CSS para personalização

const FormPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [coOwner, setCoOwner] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projeto, setProjeto] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3001/projetoss')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setProjeto(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  const handleAddTag = (event) => {
    event.preventDefault();
    const newTag = event.target.elements.tag.value;
    setTags([...tags, newTag]);
    event.target.reset();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implementar lógica de envio do formulário aqui

    // Resetar os valores do formulário
    setTitle("");
    setDescription("");
    setTags([]);
    setCoOwner("");
    setStartDate("");
    setEndDate("");
  };
  console.log(projeto)
  return (
    <>

    
      <h1>Create a new project</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="titleForm" htmlFor="title">Title of the project:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="textSmallInput"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            name="description"
            className="textFormInput"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags:</label>
          <form onSubmit={handleAddTag} className="textSmallInput">
            <input type="text" id="tag" name="tag" className="textSmallInput" />
            <button type="submit" id="tag" className="buttonAll"> Adicionar Tag</button>
          </form>
          <ul>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="form-group">
          <label htmlFor="coOwner">Co-Owner:</label>
          <input
            type="text"
            id="coOwner"
            name="coOwner"
            className="textSmallInput"
            value={coOwner}
            onChange={(event) => setCoOwner(event.target.value)}
          />
        </div>
        <div className="textSmallInput">
          <div className="form-group">
            <label htmlFor="startDate">Data de Início:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              />
        </div>

        </div>
        <div className="textSmallInput">
          <div className="form-group">
            <label htmlFor="endDate">Data de Término:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              />
          </div>
        </div>
        <button
          type="submit"
          className="buttonAll"
        >
          Adicionar Projeto
        </button>
      </form>

    {projeto.map((project) => {
         return (
          <>
          <div key={project.id}>
            <h2>{project.name}</h2>
            <p >{project.description}</p>
          </div>
          </>
         );
      })}
    </>
  );
};

export default FormPage;