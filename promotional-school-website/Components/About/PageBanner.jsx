function PageBanner() {
    return (
        <>
            <div className="text-center p-4 p-md-5" style={{ backgroundColor: "rgb(208, 210, 245)" }}>
                <p
                    className="fw-bold mb-2 d-inline-block px-3 py-1 rounded-4"
                    style={{ color: "rgb(58, 121, 88)", backgroundColor: "rgb(228, 240, 230)", fontSize: "0.85rem" }}
                    data-aos="fade-down"
                >
                    <i className="fa-solid fa-circle-info"></i> About Us
                </p>

                <h2
                    className="fw-bold fs-3 fs-md-1"
                    style={{ color: "rgb(20, 30, 60)" }}
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    Twenty-Five Years of Nurturing Curious, Confident Minds
                </h2>

                <p
                    className="pt-2 mx-auto px-2"
                    style={{ color: "rgb(120, 125, 135)", maxWidth: "500px" }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    The story, philosophy, and people behind Goglya Krish International School and the values that guide everything we do.
                </p>
            </div>
        </>
    )
};
export default PageBanner;