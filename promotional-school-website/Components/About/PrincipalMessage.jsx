 function PrincipalMessage() {
    const profile = "/profile.png";
    return (
        <>
            <div className="d-flex justify-content-center p-3 p-md-5" style={{ backgroundColor: "rgb(191, 192, 218)" }}>
                <div
                    className="card border-0 rounded-5 w-100 p-4 p-md-5 m-2 m-md-5 shadow-lg"
                    style={{ backgroundColor: "rgb(255, 255, 255)", maxWidth: "900px" }}
                >
                    <div className="row g-4 align-items-center">

                        <div
                            className="col-12 col-md-4 d-flex justify-content-center"
                            data-aos="fade-right"
                        >
                            <div
                                className="card border-0 shadow-lg p-2 w-100"
                                style={{ backgroundColor: "rgb(13, 24, 73)", maxWidth: "300px" }}
                            >
                                <img
                                    src={profile}
                                    alt="Dr. Anjali Shinde, Principal"
                                    className="w-100"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>

                        <div
                            className="col-12 col-md-8 text-center text-md-start"
                            data-aos="fade-left"
                            data-aos-delay="150"
                        >
                            <p style={{ color: "rgb(132, 133, 136)" }}>
                                Education is not just about preparing students for exams - it is about preparing them for life. At GK, we walk alongside every child, helping them discover their strengths and build the confidence to use them.
                            </p>
                            <h4 style={{ color: "rgb(73, 72, 72)" }}>Dr. Anjali Shinde</h4>
                            <p style={{ color: "rgb(175, 170, 170)" }}>
                                Principal, GoglyaKrish International School
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};
export default PrincipalMessage;
 