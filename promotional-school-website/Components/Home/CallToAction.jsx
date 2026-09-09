function CallToAction() {
    return (
        <div className="text-center p-4 p-md-5" style={{ backgroundColor: "rgb(208, 141, 47)" }}>
            <h3 className="fw-bold p-1 fs-4 fs-md-3" style={{ color: "rgb(5, 16, 65)" }}>
                Give Your Child the GK Advantage
                <hr style={{ borderColor: "rgb(10, 10, 10)", opacity: 0.9, width: "450px", maxWidth: "85%", margin: "7px auto" }} />
            </h3>
            <p style={{ color: "rgba(71, 73, 71, 0.91)" }}>
                Applications for 2026-27 are open now. Book a campus tour or apply directly online.
            </p>
            <button
                className="btn btn-dark fw-bolder border-0 rounded-4 px-4 py-3 d-inline-flex align-items-center gap-2 text-nowrap"
                style={{ color: "rgba(252, 253, 252, 0.91)", backgroundColor: "rgb(5, 16, 65)" }}
            >
                Apply for Admission Today <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    )
};

export default CallToAction;