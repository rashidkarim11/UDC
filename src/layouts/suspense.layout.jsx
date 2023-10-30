import { Suspense, useEffect } from 'react'
import Spinner from 'src/components/spinner'
import AOS from 'aos'

export const SuspenseLayout = ({ children }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}
