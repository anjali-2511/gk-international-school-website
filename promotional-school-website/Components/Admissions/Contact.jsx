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
                        className="overflow-hidden rounded-4"
                        style={{ width: "320px", height: "260px", backgroundColor: "rgb(247, 238, 220)" }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30338.29985692761!2d74.57966665252448!3d18.104510747539127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc39f4618a3cbad%3A0x491b4a18218f1bf3!2sDorlewadi%2C%20Maharashtra%20413102!5e0!3m2!1sen!2sin!4v1788765789645!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="School Location Map"
                        ></iframe>
                    </div>

                </div>
            </div>

        </>
    )
};
export default Contact;
