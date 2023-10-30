// ** React Imports
import { useEffect } from 'react'

// ** React Router Dom Import
import { useNavigate, useLocation } from 'react-router-dom'

// ** Hooks Import
// import { useAuth } from 'src/hooks/useAuth'

const GuestGuard = props => {
  const { children, fallback } = props
  // const auth = useAuth()
  const router = useNavigate()
  const location = useLocation()
  // useEffect(() => {
  //   if (localStorage.getItem('userData')) {
  //     router('/')
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location.pathname])

  // if (auth.loading || (!auth.loading && auth.user !== null)) {
  //   return fallback
  // }

  return <>{children}</>
}

export default GuestGuard
