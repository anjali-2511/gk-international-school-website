function Achievements() {
     const cards = [
        { value: "Top 10", label: "CBSE School, City Rankings 2024" },
        { value: "120+", label: "State & National Level Awards" },
        { value: "500+", label: "Alumni in Top Universities" },
        { value: "15", label: "Years of 100% Board Results" },
    ];
    return(
        <>
         
    

    
        <div className="text-center p-5" style={{ backgroundColor: "rgb(13, 24, 73)" }}>
            <button className="btn btn-dark fw-bolder border-0 rounded-4 pe-4 mb-2 d-inline-flex align-items-center" style={{ color: "rgb(231, 159, 43)", backgroundColor: "rgba(231, 159, 43, 0.15)" }}>
                Recognised For Our Work
            </button>
            <h3 className="fw-bold" style={{ color: "rgb(250, 250, 250)" }}>Achievements</h3>

            <div className="d-flex flex-wrap gap-3 justify-content-center pt-4">
                {cards.map((item, i) => (
                    <div
                        key={i}
                        className="text-center rounded-4 p-4"
                        style={{ width: "220px", backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }}
                    >
                        <h2 className="fw-bold mb-1" style={{ color: "rgb(231, 159, 43)" }}>{item.value}</h2>
                        <p className="mb-0" style={{ color: "rgb(192, 191, 188)", fontSize: "0.9rem" }}>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    
        </>
    )
};
export default Achievements;