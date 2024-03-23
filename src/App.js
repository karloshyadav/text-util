import { useState } from "react";
import Mainbody from "./components/Mainbody";
import Navbar from "./components/Navbar";

function App() {
  const [text,setText]=useState()
    const [nexttext,setNextext]=useState()
  return (
    <>
     <Navbar text={text} nexttext={nexttext} />
     <Mainbody text={text} setText={setText} nexttext={nexttext} setNextext={setNextext} />
    </>
  );
}

export default App;
