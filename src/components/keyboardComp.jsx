import React, { useState } from "react";

import Keyboard from "react-simple-keyboard";
import "./keyboardComp.scss";

const KeyboardComp = () => {
  const [state, setState] = useState({
    input: "",
  });

  const onChange = (input) => {
    setState({ input });
    console.log("Input changed", state.input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  const onChangeInput = (e) => {
    const input = e.target.value;
    setState({ input });
  };

  const timeOutClick = () => {
    console.log("testing");
  };

  return (
    <div className="keyboardLayout">
      <input
        value={state.input}
        placeholder={"Stare to the letter for 1.5 sec to start"}
        onChange={onChangeInput}
      />
      <Keyboard
        className="trigger"
        onChange={(input) => onChange(input)}
        onKeyPress={(button) => onKeyPress(button)}
        layout={{
          eyespeak: [
            "Q W E R T Y U I O P",
            "A S D F G H J K L ;",
            "Z X C V B N M , . !",
            "{space} {bksp}",
          ],
        }}
        layoutName={"eyespeak"}
        display={{
          "{space}": "SPACE",
          "{bksp}": "DELETE",
        }}
        onMouseEnter={() => console.log("mouse entered")}
      />
      <div
        onMouseOver={() => setTimeout(timeOutClick, 3000)}
        onMouseOut={clearTimeout(timeOutClick)}
      >
        [ ]
      </div>
    </div>
  );
};

export default KeyboardComp;
