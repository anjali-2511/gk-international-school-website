import Header from "../Components/Header/Header";
import Hero from "../Components/Home/Hero";
import PromotionalSection from "../Components/Home/PromotionalSection";
import SectionTitle from "../Components/Home/SectionTitle";
import Why from "../Components/Home/WhyChoose";
import KeyHighlights from "../Components/Home/KeyHighlights";
import Features from "../Components/Home/Features";
import PrincipalMessage from "../Components/Home/Principal'sMessage";
import StudentTestimonials from "../Components/Home/StudentTestimonials";
import CallToAction from "../Components/Home/CallToAction";
import Footer from "../Components/Home/Footer";
 


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
