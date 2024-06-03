import { useState, useRef } from "react";
export default function Player() {
  const inputRef = useRef();
  const [name, setName] = useState(undefined);
  function setUserName() {
    setName(inputRef.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown user"}</h2>
      <p>
        <input type="text" ref={inputRef} />
        <button onClick={setUserName}>Set Name</button>
      </p>
    </section>
  );
}
