import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center h-96">
      <Input
        handleNameChange={handleNameChange}
        handlePasswordChange={handlePasswordChange}
        value={name}
      />
      {password === "252525" ? <Button /> : "Nada..."}
    </div>
  );
}

export default App;
