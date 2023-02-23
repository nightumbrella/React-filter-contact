import { useEffect, useRef, useState } from "react";
import "./App.css";
import data from "./data.json";
import Card from "./Card";

function App() {
  const [contact, setContact] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <div className="App">
        <h1>Filter Data</h1>
        <input
          type="text"
          placeholder="search..."
          ref={inputRef}
          className="input"
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <section className="grid">
        {data.contacts.filter((e) => {
          if(contact === ""){
            return e
          }
          else if( e.name.toLocaleLowerCase().includes(contact.toLocaleLowerCase())){
            return e
          }
        }).map((items) => (
          <Card items={items} />
        ))}
      </section>
    </>
  );
}

export default App;
