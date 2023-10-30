import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Error401 from 'src/pages/401'
import Error404 from 'src/pages/404'
import Error500 from 'src/pages/500'

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) return <Error404 />
    if (error.status === 401) return <Error401 />
    if (error.status >= 500) return <Error500 />
  }

  return <div>Something went wrong</div>
}
