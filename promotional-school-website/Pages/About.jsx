import AboutSchool from "../Components/AboutSchool";
import PageBanner from "../Components/PageBanner";
import Values from "../Components/Values";
import VisionAndMission from "../Components/Vision&Mission";
import PrincipalMessage from "../Components/Principal'sMessage";
import WhyOurSchool from "../Components/WhyOurSchool";
import Achievements from "../Components/Achievements";
import Footer from "../Components/Footer";
import TimeLine from "../Components/TimeLine";

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
        {/* <Footer/> */}
        </>
    )
};
export default About;