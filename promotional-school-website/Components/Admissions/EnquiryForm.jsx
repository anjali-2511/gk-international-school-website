function EnquiryForm() {
    return (
        <>

            <div className="text-center p-5 rounded-4" style={{ backgroundColor: "rgb(250, 244, 231)" }}>
                <button className="btn btn-dark fw-bolder border-0 rounded-4 pe-4 mb-2 d-inline-flex align-items-center" style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgb(243, 226, 198)" }}>
                    Take the First Step
                </button>
                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>Admission Enquiry Form</h3>

                <div className="mx-auto text-start rounded-4 p-4 shadow-sm bg-white pt-4 me-auto ms-auto" style={{ maxWidth: "700px", }} >
                    <div className="d-flex flex-wrap gap-3" >
                        <div style={{ flex: "1 1 45%", }}>
                            <label className="fw-bold mb-1" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>Student Name</label>
                            <input type="text" className="form-control" placeholder="e.g. Aarav Sharma" />
                        </div>
                        <div style={{ flex: "1 1 45%" }}>
                            <label className="fw-bold mb-1" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>Parent Name</label>
                            <input type="text" className="form-control" placeholder="e.g. Ritu Sharma" />
                        </div>
                        <div style={{ flex: "1 1 45%" }}>
                            <label className="fw-bold mb-1" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>Email</label>
                            <input type="email" className="form-control" placeholder="name@email.com" />
                        </div>
                        <div style={{ flex: "1 1 45%" }}>
                            <label className="fw-bold mb-1" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>Mobile Number</label>
                            <input type="tel" className="form-control" placeholder="+91 00000 00000" />
                        </div>
                    </div>

                    <div className="pt-3"  >
                        <label className="fw-bold mb-1" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>Class Applying For</label>
                        <select className="form-select">
                            <option>Select grade </option>
                            <option>Nursery</option>
                            <option>Grade 1</option>
                            <option>Grade 5</option>
                            <option>Grade 9</option>
                            <option>Grade 12</option>
                        </select>
                    </div>

                    <div className="pt-3"  >
                        <label className="fw-bold mb-1" style={{ color: "rgb(20, 30, 60)", fontSize: "0.9rem" }}>Message</label>
                        <textarea className="form-control" rows="3" placeholder="Tell us a little about your child..."></textarea>
                    </div>

                    <div className="text-center"> <button
                        className="btn fw-bold border-0 text-center rounded-4 px-4 py-2 mt-4"
                        style={{ backgroundColor: "rgb(231, 159, 43)", color: "rgb(20, 30, 60)" }}
                    >
                        Submit Enquiry →
                    </button>
                    </div>
                </div>
            </div>

        </>
    )
};
export default EnquiryForm;