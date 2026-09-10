function FeeEnquiryCTA() {
    return (
        <>
            <div className="text-center p-4 p-md-5" style={{ backgroundColor: "rgb(219, 145, 43)" }}>
                <h3
                    className="fw-bold fs-4 fs-md-3"
                    style={{ color: "rgb(20, 30, 60)" }}
                    data-aos="fade-up"
                >
                    Fee Enquiry
                    <hr style={{ borderColor: "rgb(10, 10, 10)", opacity: 0.9, width: "150px", maxWidth: "80%", margin: "7px auto" }} />
                </h3>

                <p
                    className="pt-2 px-2"
                    style={{ color: "rgb(60, 45, 20)" }}
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    Get the fee structure for your child's grade, sent directly to you.
                </p>

                <button
                    className="btn fw-bold border-0 rounded-4 px-4 py-2 mt-2"
                    style={{ backgroundColor: "rgb(20, 30, 60)", color: "rgb(255, 255, 255)" }}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                >
                    Request Fee Details →
                </button>
            </div>
        </>
    )
};
export default FeeEnquiryCTA;