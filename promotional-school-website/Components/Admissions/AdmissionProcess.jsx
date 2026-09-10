function AdmissionProcess() {
    const steps = [
        { number: "1", title: "Submit Enquiry", text: "Fill the admission enquiry form below and our team will reach out." },
        { number: "2", title: "Campus Visit", text: "Tour the campus and meet teachers and current students." },
        { number: "3", title: "Assessment", text: "A simple, age-appropriate interaction to understand your child's needs." },
        { number: "4", title: "Confirmation", text: "Complete documentation and fee payment to confirm the seat." },
    ];

    return (
        <>
            <div className="text-center p-4 p-md-5" style={{ backgroundColor: "rgb(255, 252, 252)" }}>
                <button
                    className="btn fw-bolder border-0 rounded-4 px-4 py-2 mb-2 d-inline-flex align-items-center"
                    style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgb(243, 226, 198)" }}
                    data-aos="fade-down"
                >
                    How to Apply
                </button>

                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }} data-aos="fade-up" data-aos-delay="100">
                    Admission Process
                    <hr style={{ borderColor: "rgb(10, 10, 10)", opacity: 0.9, width: "250px", maxWidth: "80%", margin: "7px auto" }} />
                </h3>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 justify-content-center pt-4">
                    {steps.map((item, i) => (
                        <div key={i} className="col d-flex justify-content-center">
                            <div
                                className="text-start rounded-4 p-4 shadow-sm h-100 w-100"
                                style={{ maxWidth: "260px", backgroundColor: "rgb(248, 244, 237)" }}
                                data-aos="fade-up"
                                data-aos-delay={150 + i * 150}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center rounded-circle mb-3 fw-bold"
                                    style={{ width: "36px", height: "36px", backgroundColor: "rgb(231, 159, 43)", color: "rgb(20, 30, 60)" }}
                                >
                                    {item.number}
                                </div>
                                <h6 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>{item.title}</h6>
                                <p className="mb-0" style={{ color: "rgb(110, 110, 115)", fontSize: "0.9rem" }}>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
export default AdmissionProcess;