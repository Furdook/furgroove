import "./App.css";

import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Information from "./components/Information";
import Location from "./components/Location";
import Tickets from "./components/Tickets";
import DJs from "./components/DJs";
import Footer from "./components/Footer";

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
        <Footer />
      </main>
    </>
  );
}

export default App;
