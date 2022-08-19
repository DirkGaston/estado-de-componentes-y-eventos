const Button = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mb-3">Contraseña correcta!</p>
      <p className="mb-3 text-red-500">
        Pulsa el botón bajo tu propia responsabilidad...
      </p>
      <a href="https://trollface.dk/">
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          💣
        </button>
      </a>
    </div>
  );
};

export default Button;
