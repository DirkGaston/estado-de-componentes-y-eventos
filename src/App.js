import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center h-96">
      <Input handleChange={handleChange} value={inputValue} />
      {inputValue === "252525" ? <Button /> : "Nada..."}
    </div>
  );
}

export default App;
