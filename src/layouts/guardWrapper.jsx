// ** Component Imports
// import AclGuard from 'src/@core/components/auth/AclGuard'
import AuthGuard from 'src/components/auth/AuthGuard'
import GuestGuard from 'src/components/auth/GuestGuard'

// ** Spinner Import
import Spinner from 'src/components/spinner'

// import { defaultACLObj } from 'src/configs/acl'
// import UserLayout from 'src/layouts/UserLayout'

const Guard = ({ children, authGuard, guestGuard }) => {
  if (guestGuard) {
    return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>
  } else {
    return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
  }
}

export const GuardWrapper = props => {
  const { children } = props
  // Variables
  // const contentHeightFixed = props.contentHeightFixed ?? false
  // const getLayout = props.getLayout ?? (page => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>)
  const authGuard = props.authGuard ?? true
  const guestGuard = props.guestGuard ?? false
  // const aclAbilities = props.acl ?? defaultACLObj

  return (
    <Guard authGuard={authGuard} guestGuard={guestGuard}>
      {/* <AclGuard aclAbilities={aclAbilities} guestGuard={guestGuard} authGuard={authGuard}> */}
      {/* {getLayout(children)} */}
      {children}
      {/* </AclGuard> */}
    </Guard>
  )
}
