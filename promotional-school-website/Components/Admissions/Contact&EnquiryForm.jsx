import { useState } from "react";

function ContactandEnquiryForm() {
    const contactdetails = [
        { icon: "fa-solid fa-location-dot", label: "Address", value: "Dorlewadi Baramati Pune 413102, Maharashtra" },
        { icon: "fa-solid fa-phone", label: "Phone", value: "+91 77760 28508" },
        { icon: "fa-solid fa-envelope", label: "Email", value: "admissions@goglyakrish.edu" },
        { icon: "fa-solid fa-clock", label: "Office Hours", value: "Mon – Sat, 9:00 AM – 4:00 PM" },
    ];

    const [formData, setFormData] = useState({
        studentName: "",
        parentName: "",
        email: "",
        mobile: "",
        grade: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.studentName.trim()) newErrors.studentName = "Student name is required.";
        if (!formData.parentName.trim()) newErrors.parentName = "Parent name is required.";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required.";
        } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, "").slice(-10))) {
            newErrors.mobile = "Enter a valid 10-digit mobile number.";
        }

        if (!formData.grade) newErrors.grade = "Please select a grade.";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmitted(false);
            return;
        }

        setErrors({});
        setSubmitted(true);
        console.log("Form submitted:", formData);
    };

    return (
        <div className="p-3 p-md-5" style={{ backgroundColor: "rgba(217, 218, 238, 0.39)" }}>
            <div className="text-center">
                <p
                    className="fw-bold mb-2 d-inline-block px-3 py-1 rounded-4"
                    style={{ color: "rgb(58, 121, 88)", backgroundColor: "rgb(228, 240, 230)", fontSize: "0.85rem" }}
                    data-aos="fade-down"
                >
                    Get in Touch
                </p>
                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }} data-aos="fade-up" data-aos-delay="100">
                    Contact & Admission Enquiry
                    <hr style={{ borderColor: "rgb(10, 10, 10)", opacity: 0.9, width: "390px", maxWidth: "80%", margin: "7px auto" }} />
                </h3>
            </div>

            <div className="row g-4 pt-4 justify-content-center align-items-start">

                {/* Contact Info + Map */}
                <div className="col-12 col-lg-4" data-aos="fade-right">
                    {contactdetails.map((item, i) => (
                        <div key={i} className="d-flex gap-3 pb-4">
                            <i className={item.icon} style={{ color: "rgb(58, 121, 88)", marginTop: "4px" }}></i>
                            <div className="text-start">
                                <h6 className="fw-bold mb-0" style={{ color: "rgb(20, 30, 60)" }}>{item.label}</h6>
                                <p className="mb-0" style={{ color: "rgb(110, 110, 115)", fontSize: "0.9rem" }}>{item.value}</p>
                            </div>
                        </div>
                    ))}

                    <div
                        className="overflow-hidden rounded-4 shadow-sm w-100"
                        style={{ height: "220px", backgroundColor: "rgb(247, 238, 220)" }}
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

                {/* Enquiry Form */}
                <div className="col-12 col-lg-7" data-aos="fade-left" data-aos-delay="150">
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="text-start rounded-4 p-4 shadow-lg w-100"
                        style={{ maxWidth: "700px", backgroundColor: "rgba(220, 221, 243, 0.81)" }}
                    >
                        <h5 className="fw-bold mb-3" style={{ color: "rgb(20, 30, 60)" }}>Admission Enquiry Form</h5>

                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <label className="fw-bold mb-1" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>Student Name</label>
                                <input
                                    type="text"
                                    name="studentName"
                                    className={`form-control ${errors.studentName ? "is-invalid" : ""}`}
                                    placeholder="e.g. Aarav Sharma"
                                    value={formData.studentName}
                                    onChange={handleChange}
                                />
                                {errors.studentName && <div className="text-danger" style={{ fontSize: "0.8rem" }}>{errors.studentName}</div>}
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="fw-bold mb-1" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>Parent Name</label>
                                <input
                                    type="text"
                                    name="parentName"
                                    className={`form-control ${errors.parentName ? "is-invalid" : ""}`}
                                    placeholder="e.g. Ritu Sharma"
                                    value={formData.parentName}
                                    onChange={handleChange}
                                />
                                {errors.parentName && <div className="text-danger" style={{ fontSize: "0.8rem" }}>{errors.parentName}</div>}
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="fw-bold mb-1" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                    placeholder="name@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className="text-danger" style={{ fontSize: "0.8rem" }}>{errors.email}</div>}
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="fw-bold mb-1" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>Mobile Number</label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                                    placeholder="+91 00000 00000"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                                {errors.mobile && <div className="text-danger" style={{ fontSize: "0.8rem" }}>{errors.mobile}</div>}
                            </div>
                        </div>

                        <div className="pt-3">
                            <label className="fw-bold mb-1" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>Class Applying For</label>
                            <select
                                name="grade"
                                className={`form-select ${errors.grade ? "is-invalid" : ""}`}
                                value={formData.grade}
                                onChange={handleChange}
                            >
                                <option value="">Select grade</option>
                                <option value="Nursery">Nursery</option>
                                <option value="Grade 1">Grade 1</option>
                                <option value="Grade 5">Grade 5</option>
                                <option value="Grade 9">Grade 9</option>
                                <option value="Grade 12">Grade 12</option>
                            </select>
                            {errors.grade && <div className="text-danger" style={{ fontSize: "0.8rem" }}>{errors.grade}</div>}
                        </div>

                        <div className="pt-3">
                            <label className="fw-bold mb-1" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>Message</label>
                            <textarea
                                name="message"
                                className="form-control"
                                rows="3"
                                placeholder="Tell us a little about your child..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {submitted && (
                            <div className="text-success fw-bold pt-3 text-center">
                                Thank you! Your enquiry has been submitted.
                            </div>
                        )}

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn fw-bold border-0 rounded-4 px-4 py-2 mt-4"
                                style={{ backgroundColor: "rgb(231, 159, 43)", color: "rgb(20, 30, 60)" }}
                            >
                                Submit Enquiry →
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
};

export default ContactandEnquiryForm;