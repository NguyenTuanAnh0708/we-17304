import React, { FC, useState } from "react";
import Lab1 from "./components/Lab1";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Lab3 from "./pages/Lab3";
import Lab4 from "./components/Lab4";

const App: FC = () => {
  return (
    <>
      <h1>This is React-TypeScript</h1>
      {/* <Lab1></Lab1> */}
      {/* <Lab3 /> */}
      <Lab4 />
    </>
  );
};

export default App;
