import { lazy } from 'react'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ErrorBoundary } from 'src/components/errorBoundary'
import { SuspenseLayout } from 'src/layouts/suspense.layout'
<<<<<<< HEAD
=======
import Production from 'src/pages/production'
>>>>>>> a1889e470a3cef208e2f51941bfee9b7ce1ad731

const HomePage = lazy(() => import('src/pages/home'))
const PressKitRelease = lazy(() => import('src/pages/pressKitRelease'))
const ContactUs = lazy(() => import('src/pages/contact'))
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
            <Route element={<Production />} path='/production' />
            <Route element={<PressKitRelease />} path='/press-kit-release' />
            <Route element={<ContactUs />} path='/contact-us' />
          </Route>
        )
      )}
    />
  )
}
