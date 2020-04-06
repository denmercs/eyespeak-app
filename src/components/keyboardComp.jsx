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

  return (
    <div className="keyboardLayout">
      <input
        value={state.input}
        placeholder={"State are the letter to start"}
        onChange={onChangeInput}
      />
      <Keyboard
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
      />
    </div>
  );
};

export default KeyboardComp;
