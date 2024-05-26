import { useState } from "react";
import "./App.css";
import Button from "./assets/components/UI/Button";
import MyElement from "./assets/components/MyElement";

function App() {
  const [toggleParagraph, setToggleParagraph] = useState(false);

  console.log("app çalıştı");

  const toggleParagraphHandler = () => {
    setToggleParagraph((prevState)=>!prevState);
  };
  return (
    <div className="container">
      <h1>Hello</h1>
      <MyElement show={false}/>
      <br/>
      <br/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
