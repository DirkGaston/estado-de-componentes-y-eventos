import { useState } from "react";

const Button = ({ name, password }) => {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || password === "") {
      setError(true);

      return;
    }
    setError(false);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      {error ? (
        <div className="error">
          <p>¡Debes ingresar tu nombre!</p>
        </div>
      ) : null}

      <p className="mb-3">¡Bien hecho {name}!</p>
      <p className="mb-3">¡Contraseña correcta!</p>
      <p className="mb-3 text-red-500">
        Pulsa el botón bajo tu propia responsabilidad...
      </p>
      <a href="https://trollface.dk/">
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={handleSubmit}
        >
          💣
        </button>
      </a>
    </div>
  );
};

export default Button;
