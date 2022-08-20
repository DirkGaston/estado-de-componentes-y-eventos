import Button from "../components/Button";

const Input = ({ setName, setPassword, name, password }) => {
  const { REACT_APP_CORRECT_PASSWORD } = process.env;
  return (
    <div className="inputContainer">
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Nombre
        </label>
        <input
          type="name"
          id="name"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ingresa tu nombre"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ingresa una contraseña"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {password === REACT_APP_CORRECT_PASSWORD ? (
        <Button name={name} password={password} />
      ) : (
        "Buena suerte con la contraseña Cris 🤡"
      )}
    </div>
  );
};

export default Input;
