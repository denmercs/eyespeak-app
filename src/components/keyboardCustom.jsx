import React, { useState } from "react";
import Keys from "./keys";

const KeyboardCustom = () => {
  const CustomMapping = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "@"],
    ["z", "x", "c", "v", "b", "n", "m", ".com"],
  ];

  const [state, setState] = useState({
    input: "",
  });

  const [hasFired, setHasFired] = useState(false);

  const onChange = (e) => {
    let value = e.target.textContent;
    setTimeout(() => {
      setState({ input: value });
    }, 2000);
  };

  return (
    <>
      <h3>Keyboard</h3>
      <input value={state.input} />

      {CustomMapping.map((rows) => (
        <Keys
          key={Math.random()}
          rows={rows}
          onChange={onChange}
          setHasFired={setHasFired}
        />
      ))}
    </>
  );
};

export default KeyboardCustom;
