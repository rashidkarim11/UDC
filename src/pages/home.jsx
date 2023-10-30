import { Header } from 'src/components/header'
import { Main } from 'src/components/main'
import { GuardWrapper } from 'src/layouts/guardWrapper'

export default function HomePage(props) {
  return (
    <GuardWrapper {...props}>
      <Header />
      <Main />
    </GuardWrapper>
  )
}
