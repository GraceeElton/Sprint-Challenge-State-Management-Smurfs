import React, { useState } from "react";

const Form = (props) => {
  const [newForm, setNewForm] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewGuy(newForm);
    setNewForm({
      name: "",
      age: "",
      height: "",
    });
  };

  const handleChanges = (e) => {
    setNewForm({
      ...newForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChanges}
            value={newForm.name}
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            name="age"
            placeholder="age"
            onChange={handleChanges}
            value={newForm.age}
          />
        </div>
        <div>
          <label htmlFor="height">Height: </label>
          <input
            type="text"
            name="height"
            placeholder="height"
            onChange={handleChanges}
            value={newForm.height}
          />
        </div>
        <button className="submitButton" type="submit">
          Create New
        </button>
      </form>
    </div>
  );
};

export default Form;
