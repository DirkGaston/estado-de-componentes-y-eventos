const Input = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="inputContainer">
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Nombre
        </label>
        <input
          onChange={handleChange}
          type="name"
          id="name"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Ingresa tu nombre"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Contraseña
        </label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Ingresa una contraseña"
          required
        />
      </div>
    </div>
  );
};

export default Input;
