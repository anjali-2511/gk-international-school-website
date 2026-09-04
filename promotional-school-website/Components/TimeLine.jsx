function TimeLine() {
    const years = [
        { year: "1999", title: "Founded by Goglya & Krish", text: "The school opens its doors with a single campus and a handful of classrooms." },
        { year: "2006", title: "New Campus & Sports Ground", text: "Expanded to a larger campus, adding a dedicated sports ground and library." },
        { year: "2013", title: "Smart Classrooms Introduced", text: "Digital learning tools rolled out across primary and secondary sections." },
        { year: "2019", title: "Streak of 100% Board Results Begins", text: "Consistent top-tier academic outcomes year after year." },
        { year: "2024", title: "Recognised Among Top 10 CBSE Schools", text: "City-wide ranking recognition for academics and infrastructure." },
    ];
    return (
        <>
            <div className="text-center p-5" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                <button className="btn btn-dark fw-bolder border-0 rounded-4 pe-4 mb-2 d-inline-flex align-items-center" style={{ color: "rgb(58, 121, 88)", backgroundColor: "rgb(228, 240, 230)" }}>
                    Our Journey
                </button>
                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>School Timeline</h3>

                <div className="position-relative pt-5" style={{ maxWidth: "800px", margin: "0 auto" }}>
                    
                    <div
                        className="d-none d-md-block position-absolute"
                        style={{ top: 0, bottom: 0, left: "50%", width: "2px", backgroundColor: "rgb(231, 159, 43)", opacity: 0.3 }}
                    ></div>

                    {years.map((item, i) => (
                        <div key={i} className="d-flex align-items-center pb-5 position-relative">
                        
                            <div className="w-50 pe-4 text-md-end text-start">
                                {i % 2 === 0 ? (
                                    <div className="d-inline-block text-start rounded-4 p-3 shadow-sm" style={{ backgroundColor: "rgb(247, 238, 220)", maxWidth: "320px" }}>
                                        <h4 className="fw-bold mb-1" style={{ color: "rgb(231, 159, 43)" }}>{item.year}</h4>
                                        <h6 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>{item.title}</h6>
                                        <p className="mb-0" style={{ color: "rgb(110, 110, 115)", fontSize: "0.9rem" }}>{item.text}</p>
                                    </div>
                                ) : null}
                            </div>

                           
                            <div
                                className="d-none d-md-flex align-items-center justify-content-center rounded-circle position-absolute"
                                style={{
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "16px",
                                    height: "16px",
                                    backgroundColor: "rgb(231, 159, 43)",
                                    border: "3px solid rgb(255, 255, 255)",
                                    boxShadow: "0 0 0 2px rgb(231, 159, 43)"
                                }}
                            ></div>

                            
                            <div className="w-50 ps-4 text-start">
                                {i % 2 !== 0 ? (
                                    <div className="d-inline-block text-start rounded-4 p-3 shadow-sm" style={{ backgroundColor: "rgb(247, 238, 220)", maxWidth: "320px" }}>
                                        <h4 className="fw-bold mb-1" style={{ color: "rgb(231, 159, 43)" }}>{item.year}</h4>
                                        <h6 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>{item.title}</h6>
                                        <p className="mb-0" style={{ color: "rgb(110, 110, 115)", fontSize: "0.9rem" }}>{item.text}</p>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
};
export default TimeLine;