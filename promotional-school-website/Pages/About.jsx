import AboutSchool from "../Components/AboutSchool";
import PageBanner from "../Components/PageBanner";
import Values from "../Components/Values";
import VisionAndMission from "../Components/Vision&Mission";
import PrincipalMessage from "../Components/Principal'sMessage";
import WhyOurSchool from "../Components/WhyOurSchool";

function About(){
    return(
        <>
        <PageBanner/>
        <AboutSchool/>
        <VisionAndMission/>
        <Values/>
        <PrincipalMessage/>
        <WhyOurSchool/>
        </>
    )
};
export default About;