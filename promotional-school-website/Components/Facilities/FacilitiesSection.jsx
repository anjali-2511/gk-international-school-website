function FacilitiesSection() {
    const SmartClassrooms = "/smart_classrooms.png";
    const ComputerLab = "/computer_lab.png";
    const ScienceLaboratory = "/science_laboratory.png";
    const DigitalLibrary = "/digital_library.png";
    const SportsGround = "/sports_ground.png";
    const ArtActivityRoom = "/art_activity_room.png";
    const SchoolTransport = "/school_transport.png";
    const MedicalFirstAid = "/medical_first_aid.png";
    const SafeSecureCampus = "/safe_secure_campus.png";
    const facilities = [ 
        { tag: "Learning", title: "Smart Classrooms" , img: SmartClassrooms},
        { tag: "Technology", title: "Computer Lab" , img: ComputerLab},
        { tag: "Discovery", title: "Science Laboratory" , img: ScienceLaboratory},
        { tag: "Reading", title: "Digital Library" , img: DigitalLibrary},
        { tag: "Sports", title: "Sports Ground" , img: SportsGround},
        { tag: "Creativity", title: "Art & Activity Room" , img: ArtActivityRoom},
        { tag: "Commute", title: "School Transport" , img: SchoolTransport},
        { tag: "Wellness", title: "Medical / First Aid" , img: MedicalFirstAid},
        { tag: "Security", title: "Safe & Secure Campus" , img: SafeSecureCampus},
    ];
    return (
        <>

            <div className="text-center p-5" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                <button className="btn btn-dark fw-bolder border-0 rounded-4 pe-4 mb-2 d-inline-flex align-items-center" style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgb(243, 226, 198)" }}>
                    Our Campus
                </button>
                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>Facilities
                    <hr style={{ borderColor: "rgb(10, 10, 10)", opacity: 0.9, width: "120px", margin: "7px auto" }} />
                </h3>
                <p className="pt-2 mx-auto" style={{ color: "rgb(110, 110, 115)", maxWidth: "480px" }}>
                    Everything a student needs to learn, play, and stay safe all on one campus.
                </p>

                <div className="d-flex flex-wrap gap-4 justify-content-center pt-4">
                    {facilities.map((item, i) => (
                        <div
                            key={i}
                            className="text-center rounded-4 p-4 d-flex flex-column justify-content-end"
                            style={{
                                width: "300px",
                                height: "220px",
                                background: "linear-gradient(160deg, rgb(5, 54, 92), rgb(8, 136, 104))",
                                
                            }}
                        >
                            <div className="border-0 w-75 p-3 mx-auto ">
                                <img className="rounded-4 w-100" src={item.img} alt="" style={{ height: "100px", objectFit: "cover" }} />{}
                            </div>
                            <p className="fw-bold mb-1" style={{ color: "rgb(231, 159, 43)", fontSize: "0.9rem" }}>{item.tag}</p>
                            <h6 className="fw-bold mb-0" style={{ color: "rgb(250, 250, 250)" }}>{item.title}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
export default FacilitiesSection;