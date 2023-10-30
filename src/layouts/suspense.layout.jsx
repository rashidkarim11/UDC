import { Suspense } from 'react'
import Spinner from 'src/components/spinner'

export const SuspenseLayout = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}
