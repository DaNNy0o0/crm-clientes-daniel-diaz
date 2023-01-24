// Funcion para obtener los clientes desde la db 
export async function obtenerClientes() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/clientes`)
    const result = await response.json();
    
    return result;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

// Funcion para obtener un cliente desde la db 
export async function obtenerCliente(id) {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/clientes/${id}`)
      const result = await response.json();
      
      return result;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  }

// Funcion para agregar los clientes a la db desde el formulario
export async function agregarCliente(datos) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/clientes`, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }

    return {}
}

//Funcion para actualizar clientes
export async function actualizarcliente(id, datos) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/clientes/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }

    return {}
}

// Funcion para eliminar
export async function eliminarCliente(id) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/clientes/${id}`, {
            method: 'DELETE',
        })
        await respuesta.json()
    } catch (error) {
        console.log(error);
    }

    return {}
}