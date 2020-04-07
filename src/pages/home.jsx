import React from "react";

import "./home.scss";
// import KeyboardComp from "../components/keyboardComp";
import KeyboardCustom from "../components/keyboardCustom";

const Home = () => {
  return (
    <div className="home">
      {/* <KeyboardComp /> */}
      <KeyboardCustom />
    </div>
  );
};

export default Home;
