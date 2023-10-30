import { Header } from 'src/components/header'
import { Main } from 'src/components/main'
import { GuardWrapper } from 'src/layouts/guardWrapper'
// ** Components Imports
import ExpertiesSection from 'src/components/experties'
import AboutUs from 'src/components/aboutUs'
import Footer from 'src/components/footer'

export default function HomePage(props) {
  return (
    <GuardWrapper {...props}>
      <Header />
      <Main />
      <ExpertiesSection />
      <Header />
      <Main />
      <ExpertiesSection />
      <AboutUs />
      <Footer />
    </GuardWrapper>
  )
}
