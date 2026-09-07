import AboutSchool from "../Components/About/AboutSchool";
import PageBanner from "../Components/About/PageBanner";
import Values from "../Components/About/Values";
import VisionAndMission from "../Components/About/Vision&Mission";
import PrincipalMessage from "../Components/About/PrincipalMessage";
import WhyOurSchool from "../Components/About/WhyOurSchool";
import Achievements from "../Components/About/Achievements";
import TimeLine from "../Components/About/TimeLine";
import Footer from "../Components/Footer/Footer";
import CTA from "../Components/About/CTA";

function About(){
    return(
        <>
        <PageBanner/>
        <AboutSchool/>
        <VisionAndMission/>
        <Values/>
        <PrincipalMessage/>
        <WhyOurSchool/>
        <Achievements/>
        <TimeLine/>
        <CTA/>
        <Footer/>
        </>
    )
};
export default About;