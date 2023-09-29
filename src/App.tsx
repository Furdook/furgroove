import './App.css'

import Landing from './components/Landing'
import Nav from './components/Nav'
import Information from './components/Information'
import Location from './components/Location'
import Tickets from './components/Tickets'
import DJs from './components/DJs'

function App() {

  return (
    <>
      <Landing />
      <Nav />
      <main>
        <Information />
        <Location />
        <Tickets /> 
        <DJs />
      </main>
    </>
  )
}

export default App
