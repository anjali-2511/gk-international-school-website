function Features() {
    const science = "/science.png";
    const sports = "/sports.png";
    const library = "/library.png";
    const arts = "/arts.png";

    const facilities = [
        { img: science, label: "Science" },
        { img: sports, label: "Sports" },
        { img: library, label: "Library" },
        { img: arts, label: "Arts" },
    ];

    return (
        <>
            <div className="text-center p-3" style={{ backgroundColor: "rgb(253, 252, 251)" }}>
                <button
                    className="btn btn-dark fw-bolder border-0 rounded-4 pe-4 d-inline-flex align-items-center text-nowrap"
                    style={{ color: "rgba(8, 59, 7, 0.91)", backgroundColor: "rgba(168, 219, 167, 0.91)" }}
                >
                    Around Campus
                </button>
                <h3 className="fw-bold p-1 fs-3 fs-md-2">
                    Featured Facilities
                    <hr style={{ borderColor: "rgb(10, 10, 10)", opacity: 0.9, width: "240px", margin: "7px auto" }} />
                </h3>
                <p>Spaces designed to support learning, creativity, and play in equal measure.</p>
            </div>

            <div className="pt-4 pb-5" style={{ backgroundColor: "rgb(253, 252, 251)" }}>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 justify-content-center">
                        {facilities.map((facility) => (
                            <div className="col d-flex justify-content-center" key={facility.label}>
                                <div className="shadow-lg rounded-4 w-100" style={{ maxWidth: "220px" }}>
                                    <div className="card border-0 w-100 p-3 shadow-lg" style={{ backgroundColor: "rgb(253, 252, 251)" }}>
                                        <img
                                            className="rounded-4 w-100"
                                            src={facility.img}
                                            alt={facility.label}
                                            style={{ height: "160px", objectFit: "cover" }}
                                        />
                                    </div>
                                    <p className="text-center p-3" style={{ color: "rgb(231, 159, 43)" }}>
                                        {facility.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};
export default Features;