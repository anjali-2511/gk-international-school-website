function Contact() {
    const contactdetails = [
        { icon: "fa-solid fa-location-dot", label: "Address", value: "Dorlewadi Baramati Pune 413102, Maharashtra" },
        { icon: "fa-solid fa-phone", label: "Phone", value: "+91 77760 28508" },
        { icon: "fa-solid fa-envelope", label: "Email", value: "admissions@goglyakrish.edu" },
        { icon: "fa-solid fa-clock", label: "Office Hours", value: "Mon – Sat, 9:00 AM – 4:00 PM" },
    ];

    return (
        <>

            <div className="p-5" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                <div className="text-center">
                    <p className="fw-bold mb-2 d-inline-block px-3 py-1 rounded-4" style={{ color: "rgb(58, 121, 88)", backgroundColor: "rgb(228, 240, 230)", fontSize: "0.85rem" }}>
                        Get in Touch
                    </p>
                    <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>Contact Us</h3>
                </div>

                <div className="d-flex flex-wrap gap-4 pt-4 justify-content-center">

                   
                    <div style={{ maxWidth: "280px" }}>
                        {contactdetails.map((item, i) => (
                            <div key={i} className="d-flex gap-3 pb-4">
                                <i className={item.icon} style={{ color: "rgb(58, 121, 88)", marginTop: "4px" }}></i>
                                <div className="text-start">
                                    <h6 className="fw-bold mb-0" style={{ color: "rgb(20, 30, 60)" }}>{item.label}</h6>
                                    <p className="mb-0" style={{ color: "rgb(110, 110, 115)", fontSize: "0.9rem" }}>{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                     
                    <div
                        className="d-flex align-items-center justify-content-center rounded-4"
                        style={{ width: "320px", height: "260px", backgroundColor: "rgb(247, 238, 220)" }}
                    >
                        <p className="fw-bold mb-0" style={{ color: "rgb(20, 30, 60)" }}>
                            <i className="fa-solid fa-location-dot me-1"></i> Google Map Placeholder
                        </p>
                    </div>

                </div>
            </div>

        </>
    )
};
export default Contact;
