import { useLoaderData } from "react-router-dom";

import Cliente from "../components/Cliente";

import { obtenerClientes } from "../data/clientes";

// Funcion para crear el loader de este componente
export function loader() {

  //Obtiene los clientes y los muestra en /clientes
  const clientes = obtenerClientes()

  return clientes;
}

const Index = () => {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="text-4xl font-black text-blue-900">Clientes</h1>

      <p className="mt-3">Administra tus clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
             <Cliente 
                cliente={cliente}
                key={cliente.id}
             />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes todavía</p>
      )}
    </>
  );
};

export default Index;
