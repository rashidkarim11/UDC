import { Header } from 'src/components/header'

// ** Components Imports
import Footer from 'src/components/footer'
import { GuardWrapper } from 'src/layouts/guardWrapper'
import { Main } from 'src/views/client/main'
import Category from 'src/views/client/category'

export default function OurClient(props) {
  return (
    <GuardWrapper {...props}>
      <Header />
      <Main />
      <Category />
      <Footer />
    </GuardWrapper>
  )
}
