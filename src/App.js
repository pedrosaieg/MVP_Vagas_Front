import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import NewCompany from './components/pages/NewCompany'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Router>

        <div>
          <Navbar />
        </div>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newcompany" element={<NewCompany />} />
            <Route exact path="/company/:id" element={<Company />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
