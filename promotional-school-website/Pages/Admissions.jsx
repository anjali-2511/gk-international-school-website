import AdmissionPage from "../Components/Admissions/AdmissionPage";
import AdmissionProcess from "../Components/Admissions/AdmissionProcess";
import Contact from "../Components/Admissions/Contact";
import EnquiryForm from "../Components/Admissions/EnquiryForm";
import FeeEnquiryCTA from "../Components/Admissions/FeeEnquiryCTA";
import Requirements from "../Components/Admissions/Requirements";

function Admissions(){
    return(
        <>
        <AdmissionPage/>
        <AdmissionProcess/>
        <Requirements/>
        <FeeEnquiryCTA/>
        <Contact/>
        <EnquiryForm/>
        </>
    )
};export default Admissions;