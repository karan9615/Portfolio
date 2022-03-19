import "./App.css";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
// Temporary arrangement is being done here
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Profile from "./components/Profile/Profile"
import Resume from "./components/Resume/Resume"
import Projects from "./components/Projects/Projects"
import Certification from "./components/Certifications/Certification"

import {Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App bg-gray-800 text-white" style={{fontFamily:"Manrope,sans-serif"}}>
      <Navbar />
      <Header />
      <Routes>
        <Route>
          <Route exact path="/" element={<About />}></Route>
          <Route exact path="profile" element={<Profile />}></Route>
          <Route exact path="projects" element={<Projects/>}></Route>
          <Route exact path="resume" element={<Resume />}></Route>
          <Route exact path="contact" element={<Contact/>}></Route>
          <Route exact path="certification" element={<Certification />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
