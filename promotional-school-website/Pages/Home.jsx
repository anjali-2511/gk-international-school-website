import Header from "../Components/Header";
import Hero from "../Components/Hero";
import PromotionalSection from "../Components/PromotionalSection";
import SectionTitle from "../Components/SectionTitle";
import Why from "../Components/Why";
import KeyHighlights from "../Components/KeyHighlights";
import Features from "../Components/Features";
import PrincipalMessage from "../Components/Principal'sMessage";
import StudentTestimonials from "../Components/StudentTestimonials";
import CallToAction from "../Components/CallToAction";
 


function Home(){
    return(
        <>
        <Header/>
        <br />
        <br />
        <br />
        <br />
        
         
        <Hero/>
        <SectionTitle/>
        <PromotionalSection/>
        <Why/>
        <KeyHighlights/>
        <Features/>
        <PrincipalMessage/>
        <StudentTestimonials/>
        <CallToAction/>
         
        </>
    )
};
export default Home;
