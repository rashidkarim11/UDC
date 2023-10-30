import ClientsSec from 'src/components/clients'
import { GuardWrapper } from 'src/layouts/guardWrapper'

export default function HomePage(props) {
  return (
    <GuardWrapper {...props}>
      <ClientsSec />
    </GuardWrapper>
  )
}
