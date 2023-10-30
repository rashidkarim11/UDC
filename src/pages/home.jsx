import AboutUs from 'src/components/aboutUs'
import { GuardWrapper } from 'src/layouts/guardWrapper'

// ** Components Imports
import ExpertiesSection from 'src/components/experties' 

export default function HomePage(props) {
  return (
    <GuardWrapper {...props}>
      <h1>Home Page</h1>
      <ExpertiesSection /> 
      <AboutUs />
    </GuardWrapper>
  )
}
