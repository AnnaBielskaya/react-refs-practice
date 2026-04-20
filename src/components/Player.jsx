import { useDebugValue, useEffect, useRef, useState } from "react";

export default function Player() {
  const playerInput = useRef();
  const [enteredName, setEnteredName] = useState("");

  const handleClick = () => {
    setEnteredName(playerInput.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {enteredName ? enteredName : "unknown entity"}</h2>
      <p>
        <input ref={playerInput} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
