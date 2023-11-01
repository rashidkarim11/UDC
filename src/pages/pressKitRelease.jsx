 
import { Header } from 'src/components/header'
import { Main } from 'src/views/pressKitRelease/main'
import { GuardWrapper } from 'src/layouts/guardWrapper'
// ** Components Imports
 

export default function PressKitRelease(props) {
  return (
    <GuardWrapper {...props}>  
      <Header />
      <Main />
 
    </GuardWrapper>
  )
}
