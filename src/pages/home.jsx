import { Header } from 'src/components/header'
import ClientsSec from 'src/views/home/clients'
import { Main } from 'src/views/home/main'
import { GuardWrapper } from 'src/layouts/guardWrapper'
// ** Components Imports
import ExpertiesSection from 'src/views/home/experties'
import AboutUs from 'src/views/home/aboutUs'
import Footer from 'src/components/footer'

export default function HomePage(props) {
  return (
    <GuardWrapper {...props}>
      <Header />
      <Main />
      <ExpertiesSection />
      <AboutUs />
      <ClientsSec />
      <Footer />
    </GuardWrapper>
  )
}
