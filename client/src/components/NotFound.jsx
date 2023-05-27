import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white rounded-md shadow p-8">
        <h1 className="text-3xl font-bold mb-4">Página no encontrada</h1>
        <p className="text-xl mb-8">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <div className="my-10 text-6xl font-bold">Error 404</div>
        <a
          href="/"
          className="text-white bg-blue-500 px-6 py-3 rounded font-bold text-lg hover:bg-blue-600"
        >
          Volver a la página principal
        </a>
      </div>
    </div>
  );
};

export default NotFound;
