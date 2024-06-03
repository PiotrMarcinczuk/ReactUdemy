import { useState } from "react";

export default function Greeting() {
  const [b, setB] = useState(false);

  const changeButton = () => {
    setB(!b);
  };
  return (
    <>
      <h2>Hello World!</h2>
      {!b && <p>It's a good to see you!</p>}
      {b && <p>Changed!</p>}
      <button onClick={changeButton}>Change Text</button>
    </>
  );
}
