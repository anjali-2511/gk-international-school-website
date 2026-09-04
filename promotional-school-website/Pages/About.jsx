import AboutSchool from "../Components/AboutSchool";
import PageBanner from "../Components/PageBanner";
import Values from "../Components/Values";
import VisionAndMission from "../Components/Vision&Mission";
import PrincipalMessage from "../Components/Principal'sMessage";
import WhyOurSchool from "../Components/WhyOurSchool";
import Achievements from "../Components/Achievements";

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
        </>
    )
};
export default About;