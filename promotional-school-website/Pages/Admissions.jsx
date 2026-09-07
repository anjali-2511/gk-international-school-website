import AdmissionPage from "../Components/Admissions/AdmissionPage";
import AdmissionProcess from "../Components/Admissions/AdmissionProcess";
import FeeEnquiryCTA from "../Components/Admissions/FeeEnquiryCTA";
import Requirements from "../Components/Admissions/Requirements";

function Admissions(){
    return(
        <>
        <AdmissionPage/>
        <AdmissionProcess/>
        <Requirements/>
        <FeeEnquiryCTA/>
        </>
    )
};export default Admissions;