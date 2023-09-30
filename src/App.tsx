import './App.css'

import Landing from './components/Landing'
import Nav from './components/Nav'
import Information from './components/Information'
import Location from './components/Location'
import Tickets from './components/Tickets'
import DJs from './components/DJs'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Landing />
      <Nav />
      <main id="mainContent">
        <Information />
        <Location />
        <Tickets /> 
        <DJs />
        <Contact />
      </main>
    </>
  )
}

export default App
