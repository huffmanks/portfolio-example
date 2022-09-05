import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App