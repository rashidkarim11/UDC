import { lazy } from 'react'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ErrorBoundary } from 'src/components/errorBoundary'
import { SuspenseLayout } from 'src/layouts/suspense.layout'

const HomePage = lazy(() => import('src/pages/home'))

export const AppRouter = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route
            errorElement={<ErrorBoundary />}
            element={
              <SuspenseLayout>
                <Outlet />
              </SuspenseLayout>
            }
          >
            <Route element={<HomePage />} path='/' />
          </Route>
        )
      )}
    />
  )
}
