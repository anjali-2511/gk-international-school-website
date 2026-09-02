function VisionAndMission() {
    return(
        <>
         
        <div className="text-center p-5" style={{ backgroundColor: "rgb(247, 238, 220)" }}>
            <button className="btn btn-dark fw-bolder border-0 rounded-4 pe-4 mb-2 d-inline-flex align-items-center" style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgb(243, 226, 198)" }}>
                What Drives Us
            </button>
            <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>Our Vision & Mission</h3>

            <div className="d-flex flex-wrap gap-4 justify-content-center pt-4">
                <div
                    className="text-start rounded-4 p-4 shadow-sm bg-white"
                    style={{ width: "340px", borderTop: "3px solid rgb(231, 159, 43)" }}
                >
                    <div
                        className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                        style={{ width: "44px", height: "44px", backgroundColor: "rgb(247, 238, 220)" }}
                    >
                        <i className="fa-solid fa-star" style={{ color: "rgb(231, 159, 43)" }}></i>
                    </div>
                    <h5 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>Our Vision</h5>
                    <p style={{ color: "rgb(110, 110, 115)" }}>
                        To be a learning community where every student is empowered to think independently, act with integrity, and lead with compassion — ready to shape a better future for themselves and the world around them.
                    </p>
                </div>

                 
                <div
                    className="text-start rounded-4 p-4 shadow-sm bg-white"
                    style={{ width: "340px", borderTop: "3px solid rgb(58, 121, 88)" }}
                >
                    <div
                        className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                        style={{ width: "44px", height: "44px", backgroundColor: "rgb(228, 240, 230)" }}
                    >
                        <i className="fa-solid fa-seedling" style={{ color: "rgb(58, 121, 88)" }}></i>
                    </div>
                    <h5 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>Our Mission</h5>
                    <p style={{ color: "rgb(110, 110, 115)" }}>
                        To deliver a balanced, values-driven education that combines strong academics with character development, modern learning tools, and genuine mentorship — helping each child discover and pursue their own definition of success.
                    </p>
                </div>

            </div>
        </div>
    
        </>
    )
};
export default VisionAndMission;