import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

import AboutSection from './components/AboutSection'
import BlogSection from './components/BlogSection'
import ClientSection from './components/ClientSection'
import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection'
import TaglineSection from './components/TaglineSection'
import WhySection from './components/WhySection'

const App = () => {
    return (
        <>
            <Navbar />
            <>
                <HeroSection />
                <ClientSection />
                <TaglineSection />
                <ProductSection />
                <AboutSection />
                <WhySection />
                <BlogSection />
            </>
            <Footer />
        </>
    )
}

export default App
