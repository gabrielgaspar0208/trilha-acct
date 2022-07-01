import { useState } from "react";
import HelloWorld from "./components/HelloWorld";
import "./styles/styles.css";

function App() {
  const [text, setText] = useState("Clique em um botão :p");
  const [color, setColor] = useState("#eee");
  const [textTransform, setTextTransform] = useState("capitalize");
  const [fontSize, setFontSize] = useState("30px");
  const [transform, setTransform] = useState("scale(1, 1)");

  const data = new Date();

  const FirstButton = () => {
    setText("Hello World!");
    setColor("#eee");
    setTextTransform("Hello World");
    setFontSize("64px");
    setTransform("scale(1,1)");
  };
  const SecondButton = () => {
    setText("Olá Mundo!");
    setTextTransform("capitalize");
    setFontSize("64px");
    setTransform("scale(1,1)");
  };
  const ThirdButton = () => {
    setText("Hello World!");
    setColor("#171a1b");
    setTextTransform("capitalize");
    setFontSize("64px");
    setTransform("scale(1,1)");
  };
  const FourthButton = () => {
    setText("Hello World!");
    setColor("#eeee89");
    setTextTransform("uppercase");
    setFontSize("64px");
    setTransform("scale(1,1)");
  };
  const FifthButton = () => {
    setText("Hello World!");
    setColor("#0062B1");
    setTextTransform("lowercase");
    setFontSize("64px");
    setTransform("scale(1,1)");
  };
  const SixthButton = () => {
    setText("Hola Mundo!");
    setColor("#4E473C");
    setTextTransform("capitalize");
    setFontSize("64px");
    setTransform("scale(1,1)");
  };
  const SeventhButton = () => {
    setText("Hello World!");
    setFontSize("20px");
    setColor("#690E05");
    setTextTransform("capitalize");
    setFontSize("64px");
    setTransform("scale(1, -1)");
  };
  const EigthButton = () => {
    setText("こんにちは世界！");
    setColor("#db1010");
    setTextTransform("capitalize");
    setFontSize("64px");
    setTransform("scale(1,1)");
  };
  const NinthButton = () => {
    setText("Hello World");
    setColor("#111");
    setTextTransform("capitalize");
    setFontSize("44px");
    setTransform("scale(1,1)");
  };
  const TenthButton = () => {
    setText("Hello World");
    setColor("#32cd32");
    setTextTransform("capitalize");
    setFontSize("64px");
    setTransform("scale(-1, 1)");
  };

  return (
    <div className="container">
      <HelloWorld
        text={text}
        color={color}
        textTransform={textTransform}
        transform={transform}
        fontSize={fontSize}
      />
      <p>{Date()}</p>
      <button onClick={() => FirstButton()}>1</button>
      <button onClick={() => SecondButton()}>2</button>
      <button onClick={() => ThirdButton()}>3</button>
      <button onClick={() => FourthButton()}>4</button>
      <button onClick={() => FifthButton()}>5</button>
      <button onClick={() => SixthButton()}>6</button>
      <button onClick={() => SeventhButton()}>7</button>
      <button onClick={() => EigthButton()}>8</button>
      <button onClick={() => NinthButton()}>9</button>
      <button onClick={() => TenthButton()}>10</button>
    </div>
  );
}

export default App;
