function PageBanner() {
    return (
        <>
            <div className="text-center p-5" style={{ backgroundColor: "rgba(218, 151, 8, 0.93)" }}>
                <button className="btn btn-dark fw-bolder border-0 rounded-4 p-2  d-inline-flex align-items-center" style={{ color: "rgba(8, 59, 7, 0.91)", backgroundColor: "rgba(168, 219, 167, 0.91)" }}>
                   About Us
                </button>
                <h2 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>
                    Twenty-Five Years of Nurturing Curious, Confident Minds
                </h2>
                <p className="pt-2 mx-auto" style={{ color: "rgb(120, 125, 135)", maxWidth: "500px" }}>
                    The story, philosophy, and people behind Goglya Krish International School and the values that guide everything we do.
                </p>
            </div>
        </>
    )
};
export default PageBanner;