function Footer() {
    return (
        <>

            <div className="pt-1 px-2 py-2 pe-3 ps-3 fixed-bottom" style={{ backgroundColor: "rgb(24, 37, 94)" }}>
                <div className="d-flex justify-content-between flex-wrap ps-5 pe-5 pt-1 pb-2">


                    <div style={{ maxWidth: "280px" }}>
                        <h5 className="fw-bold" style={{ color: "rgb(250, 250, 250)", fontFamily: "serif" }}>
                            Goglya Krish International School
                        </h5>
                        <p className="pt-1" style={{ color: "rgb(192, 191, 188)" }}>
                            Nurturing curious minds and strong character since 2026 a school built on excellence, care, and community.
                        </p>

                        <div className="d-flex gap-3 pt-1">
                            <a href="#" className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: "36px", height: "36px", border: "1px solid rgb(90, 100, 140)", color: "rgb(250, 250, 250)", textDecoration: "none" }}>
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>

                            <a href="#" className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: "36px", height: "36px", border: "1px solid rgb(90, 100, 140)", color: "rgb(250, 250, 250)", textDecoration: "none" }}>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>

                            <a href="#" className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: "36px", height: "36px", border: "1px solid rgb(90, 100, 140)", color: "rgb(250, 250, 250)", textDecoration: "none" }}>
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a href="#" className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: "36px", height: "36px", border: "1px solid rgb(90, 100, 140)", color: "rgb(250, 250, 250)", textDecoration: "none" }}>
                                <i class="fa-brands fa-square-youtube"></i>
                            </a>
                        </div>
                    </div>


                    <div>
                        <h6 className="fw-bold" style={{ color: "rgb(231, 159, 43)", letterSpacing: "1px" }}>QUICK LINKS</h6>
                        <ul className="list-unstyled pt-2">
                            <li className="pb-1"><a href="#" style={{ color: "rgb(192, 191, 188)", textDecoration: "none" }}>Home</a></li>

                            <li className="pb-1"><a href="#" style={{ color: "rgb(192, 191, 188)", textDecoration: "none" }}>About Us</a></li>

                            <li className="pb-1"><a href="#" style={{ color: "rgb(192, 191, 188)", textDecoration: "none" }}>Facilities</a></li>

                            <li className="pb-1"><a href="#" style={{ color: "rgb(192, 191, 188)", textDecoration: "none" }}>Academics</a></li>

                            <li className="pb-1"><a href="#" style={{ color: "rgb(192, 191, 188)", textDecoration: "none" }}>Admissions</a></li>
                        </ul>
                    </div>


                    <div className="pe-5">
                        <h6 className="fw-bold" style={{ color: "rgb(231, 159, 43)", letterSpacing: "1px" }}>CONTACT</h6>

                        <ul className="list-unstyled pt-2">
                            <li className="pb-1" style={{ color: "rgb(192, 191, 188)" }}> Dorlewadi Baramati Pune 413102</li>

                            <li className="pb-1" style={{ color: "rgb(192, 191, 188)" }}>admissions@goglyakrish.edu</li>

                            <li className="pb-1" style={{ color: "rgb(192, 191, 188)" }}>+91 7776 0285 08</li>
                        </ul>
                    </div>

                </div>

                <hr style={{ borderColor: "rgb(60, 70, 110)", opacity: 0.4 }} />

                <div className="d-flex justify-content-between flex-wrap pe-2 ps-2">
                    <p style={{ color: "rgb(152, 152, 156)" }}><i className="fa-regular fa-copyright"></i> 2026 Goglya Krish International School. All rights reserved.</p>

                    <p style={{ color: "rgb(150, 150, 160)" }}>Privacy Policy | Terms of Use</p>
                </div>
            </div>



        </>
    )
};
export default Footer;