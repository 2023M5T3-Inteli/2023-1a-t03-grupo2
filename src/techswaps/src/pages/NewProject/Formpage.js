import React, { useState } from "react";
import "./FormPage.css"; //importando o arquivo CSS para personalização

const FormPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [coOwner, setCoOwner] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  return (
    <div className="form-container">
      <h1>Novo Projeto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título do Projeto:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags:</label>
          <form onSubmit={handleAddTag}>
            <input type="text" id="tag" name="tag" />
            <button type="submit" id="tag" > Adicionar Tag</button>
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
            value={coOwner}
            onChange={(event) => setCoOwner(event.target.value)}
          />
        </div>
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
        <button
          type="submit"
          className="btn-submit"
        >
          Adicionar Projeto
        </button>
      </form>
    </div>
  );
};

export default FormPage;