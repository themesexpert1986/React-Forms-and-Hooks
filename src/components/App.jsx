import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [messageToGuest, setMessageToGuest] = useState("");

  function handleChange(event) {
    // console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    setName(event.target.value);
  }

  function handleClick(event) {
    setMessageToGuest(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {messageToGuest}</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="What's your name?"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
