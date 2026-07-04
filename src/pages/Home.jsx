import AboutCoach from "../components/home/AboutCoach.";
import Gallery from "../components/home/Gallery";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import MainLayout from "../components/layout/MainLayout";
import Contact from '../components/home/Contact'
import Footer from "../components/home/Footer";

export default function Home(){
    return(
        <MainLayout>
            <Hero />
            <AboutCoach />
            <Services />
            <Gallery />
            <Contact />
            <Footer />
        </MainLayout>
    )
}