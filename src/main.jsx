import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Imports from React Router Dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";

// Pages
import NuevoCliente, {action as nuevoClienteAction} from "./pages/NuevoCliente";
import Index, {loader as clientesLoader} from "./pages/Index";
import EditarCliente, {loader as editarClienteLoader, action as editarClienteAction} from "./pages/EditarCliente";
import {action as eliminarClienteAction} from "./components/Cliente"

// Funcion para crear el router y gestionar las rutas
const router = createBrowserRouter([
  // Aqui se renderiza el componente default para todas las paginas
  {
    path: "/",
    element: <Layout />,
    children: [
      // Aqui se insertan las rutas siguiendo esta estructura:
      // Esto es lo que se muestra en la pagina principal
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        //Componente que muestra la pagina de error
        errorElement: <ErrorPage />
      },
      // A partir de aqui es lo que se muestra en las demas rutas
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />
      },
      {
        //:clienteId es el valor dinamico para añadir el ID a la ruta
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader: editarClienteLoader,
        errorElement: <ErrorPage />,
        action: editarClienteAction
      },
      {
        //:clienteId es el valor dinamico para eliminar el ID elegido
        path: "/clientes/:clienteId/eliminar",
        action: eliminarClienteAction
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
