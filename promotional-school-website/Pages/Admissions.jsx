import AdmissionPage from "../Components/Admissions/AdmissionPage";
import AdmissionProcess from "../Components/Admissions/AdmissionProcess";
import ContactandEnquiryForm from "../Components/Admissions/Contact&EnquiryForm";
import FeeEnquiryCTA from "../Components/Admissions/FeeEnquiryCTA";
import Requirements from "../Components/Admissions/Requirements";
import Footer from "../Components/Footer/Footer";

function Admissions(){
    return(
        <>
        <AdmissionPage/>
        <AdmissionProcess/>
        <Requirements/>
        <FeeEnquiryCTA/>
        <ContactandEnquiryForm/>
        <Footer/>
        </>
    )
};export default Admissions;