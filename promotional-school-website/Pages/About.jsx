import AboutSchool from "../Components/AboutSchool";
import PageBanner from "../Components/PageBanner";
import Values from "../Components/Values";
import VisionAndMission from "../Components/Vision&Mission";
import PrincipalMessage from "../Components/Principal'sMessage";
import WhyOurSchool from "../Components/WhyOurSchool";
import Achievements from "../Components/Achievements";
import Footer from "../Components/Footer";

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
        {/* <Footer/> */}
        </>
    )
};
export default About;