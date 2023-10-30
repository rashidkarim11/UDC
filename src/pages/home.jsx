import ClientsSec from 'src/components/clients'
import { Header } from 'src/components/header'
import { Main } from 'src/components/main'
import { GuardWrapper } from 'src/layouts/guardWrapper'

// ** Components Imports
import ExpertiesSection from 'src/components/experties'
import AboutUs from 'src/components/aboutUs'

export default function HomePage(props) {
  return (
    <GuardWrapper {...props}>
      <ClientsSec />
      <Header />
      <Main />
      <ExpertiesSection />
      <AboutUs />
    </GuardWrapper>
  )
}
