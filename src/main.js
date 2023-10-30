import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { AppRouter } from './routes'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Website Name</title>
        <meta name='description' content='React website' />
        <meta name='keywords' content='react app' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Helmet>
      <AppRouter />
      <Toaster position='top-center' />
    </HelmetProvider>
  )
}

export default App
