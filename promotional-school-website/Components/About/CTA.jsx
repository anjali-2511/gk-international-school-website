function CTA() {
    return (
        <div className="text-center p-4 p-md-5" style={{ backgroundColor: "rgb(219, 145, 43)" }}>
            <h3
                className="fw-bold fs-4 fs-md-3"
                style={{ color: "rgb(20, 30, 60)" }}
                data-aos="fade-up"
            >
                Come See Goglya Krish for Yourself
                <hr
                    style={{
                        borderColor: "rgb(10, 10, 10)",
                        opacity: 0.9,
                        maxWidth: "470px",
                        width: "80%",
                        margin: "7px auto"
                    }}
                />
            </h3>

            <p
                className="pt-2 px-2"
                style={{ color: "rgb(60, 45, 20)" }}
                data-aos="fade-up"
                data-aos-delay="150"
            >
                Book a campus tour and meet the teachers who'll be guiding your child's journey.
            </p>

            <button
                className="btn fw-bold border-0 rounded-4 px-4 py-2 mt-2"
                style={{ backgroundColor: "rgb(20, 30, 60)", color: "rgb(255, 255, 255)" }}
                data-aos="zoom-in"
                data-aos-delay="300"
            >
                Schedule a Visit →
            </button>
        </div>
    )
};

export default CTA;