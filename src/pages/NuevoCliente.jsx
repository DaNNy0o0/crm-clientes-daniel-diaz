import { useNavigate, Form, useActionData, redirect } from "react-router-dom";

import Formulario from "../components/Formulario";
import Error from "../components/Error";

import { agregarCliente } from "../data/clientes";

// Solicita los datos ingresados en el formulario
export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  // Validación
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  // Validación del campo de email
  const email = formData.get("email");
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])");

  if (!regex.test(email)) {
    errores.push('El email no es válido')
  }

  // Retornar si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }
  //Agrega el cliente introducido en el formulario a la db y redirecciona a la pagina principal
  await agregarCliente(datos);

  return redirect('/')
}

const NuevoCliente = () => {
  const navigate = useNavigate();

  const errores = useActionData();

  return (
    <>
      <h1 className="text-4xl font-black  text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        Completa los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-l"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w3/4 mx-auto px-5 py-10 mt-16">
        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post" noValidate>
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg rounded"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
