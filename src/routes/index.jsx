import { lazy } from 'react'
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ErrorBoundary } from 'src/components/errorBoundary'
import Footer from 'src/components/footer'
import { Header } from 'src/components/header'
import { SuspenseLayout } from 'src/layouts/suspense.layout'
import Production from 'src/pages/production'

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
              <div>
                <Header />
                <SuspenseLayout>
                  <Outlet />
                </SuspenseLayout>
                <Footer />
              </div>
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
