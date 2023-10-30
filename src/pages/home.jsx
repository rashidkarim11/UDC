import Footer from 'src/components/footer'
import { GuardWrapper } from 'src/layouts/guardWrapper'

export default function HomePage(props) {
  return (
    <GuardWrapper {...props}>
      <h1>Home Page</h1>
      <Footer />
    </GuardWrapper>
  )
}
