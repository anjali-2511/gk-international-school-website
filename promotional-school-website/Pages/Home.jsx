import Header from "../Components/Header";
import Hero from "../Components/Hero";
import PromotionalSection from "../Components/PromotionalSection";
import SectionTitle from "../Components/SectionTitle";
import Why from "../Components/WhyChoose";
import KeyHighlights from "../Components/KeyHighlights";
import Features from "../Components/Features";
import PrincipalMessage from "../Components/Principal'sMessage";
import StudentTestimonials from "../Components/StudentTestimonials";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";
 


function Home(){
    return(
        <>
         
        <Hero/>
        <SectionTitle/>
        <PromotionalSection/>
        <Why/>
        <KeyHighlights/>
        <Features/>
        <PrincipalMessage/>
        <StudentTestimonials/>
        <CallToAction/>
        <Footer/>
         
        </>
    )
};
export default Home;
