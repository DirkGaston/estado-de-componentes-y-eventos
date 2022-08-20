import "./App.css";
import { useState } from "react";
import Input from "./components/Input";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col justify-center items-center h-96">
      <Input
        setName={setName}
        setPassword={setPassword}
        name={name}
        password={password}
      />
    </div>
  );
}

export default App;
