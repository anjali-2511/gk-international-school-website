function PageBanner() {
    return (
        <>
            <div className="text-center p-5" style={{ backgroundColor: "rgb(238, 226, 201)" }}>
               <p className="fw-bold mb-2 d-inline-block px-3 py-1 rounded-4" style={{ color: "rgb(58, 121, 88)", backgroundColor: "rgb(228, 240, 230)", fontSize: "0.85rem" }}>
                    <i class="fa-solid fa-circle-info"></i> About Us
                </p>
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