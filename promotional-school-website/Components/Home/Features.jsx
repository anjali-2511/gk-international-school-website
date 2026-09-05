// import science from "../public/science.png";
// import sports from "../public/sports.png";
// import library from "../public/library.png";
// import arts from "../public/arts.png";
function Features() {
    const science = "/science.png";
    const sports = "/sports.png";
    const library = "/library.png";
    const arts = "/arts.png";
    return (
        <>
            <div className="text-center p-3" style={{ backgroundColor: "rgb(253, 252, 251)" }}>
                <button className="btn btn-dark fw-bolder border-0 rounded-4 pe-4  d-inline-flex align-items-center" style={{ color: "rgba(8, 59, 7, 0.91)", backgroundColor: "rgba(168, 219, 167, 0.91)" }}>
                    Around Campus
                </button>
                <h3 className="fw-bold p-1">Featured Facilities</h3>
                <p className=""> Spaces designed to support learning, creativity, and play in equal measure.</p>
            </div >


            <div className="pt-4 pb-3" style={{ backgroundColor: "rgb(253, 252, 251)" }}>
                <table className="w-100 h-100 justify-content-center pt-5">
                    <tr className="w-25 h-100">
                        <th>
                            <div className="shadow-lg rounded-4 ms-5" style={{ width: "220px" }}>
                                <div className="card border-0 w-100 p-3 shadow-lg" style={{ backgroundColor: "rgb(253, 252, 251)" }}>
                                    <img className="rounded-4 w-100" src={science} alt="" style={{ height: "160px", objectFit: "cover" }} />
                                </div>
                                <p className="text-center p-3" style={{ color: "rgb(231, 159, 43)" }}>Science</p>
                            </div>
                        </th>

                        <th>
                            <div className="shadow-lg rounded-4" style={{ width: "220px" }}>
                                <div className="card border-0 w-100 p-3 shadow-lg" style={{ backgroundColor: "rgb(253, 252, 251)" }}>
                                    <img className="rounded-4 w-100" src={sports} alt="" style={{ height: "160px", objectFit: "cover" }} />
                                </div>
                                <p className="text-center p-3" style={{ color: "rgb(231, 159, 43)" }}>Sports</p>
                            </div>
                        </th>

                        <th>
                            <div className="shadow-lg rounded-4 " style={{ width: "220px" }}>
                                <div className="card border-0 w-100 p-3 shadow-lg" style={{ backgroundColor: "rgb(253, 252, 251)" }}>
                                    <img className="rounded-4 w-100" src={library} alt="" style={{ height: "160px", objectFit: "cover" }} />
                                </div>
                                <p className="text-center p-3" style={{ color: "rgb(231, 159, 43)" }}>Library</p>
                            </div>
                        </th>

                        <th>
                            <div className="shadow-lg rounded-4" style={{ width: "220px" }}>
                                <div className="card border-0 w-100 p-3 shadow-lg" style={{ backgroundColor: "rgb(253, 252, 251)" }}>
                                    <img className="rounded-4 w-100" src={arts} alt="" style={{ height: "160px", objectFit: "cover" }} />
                                </div>
                                <p className="text-center p-3" style={{ color: "rgb(231, 159, 43)" }}>Arts</p>
                            </div>
                        </th>
                    </tr>
                </table>
            </div>
        </>
    )
};
export default Features;