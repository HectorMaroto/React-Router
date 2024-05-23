import { useRouteError } from "react-router-dom"

function Error() {

    // Almacena la info de los errores de las rutas y lanza un mensaje de error adecuado
    const error = useRouteError();

  return (
      <div>
          <h1>Error</h1>
          <p>{ error.statusText || error.message }</p>
    </div>
  )
}

export default Error