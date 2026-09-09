function KeyHighlights() {
    const stats = [
        { value: "25", label: "Years of Excellence" },
        { value: "1000", label: "Students" },
        { value: "50", label: "Experienced Teachers" },
        { value: "95", label: "Academic Success" },
    ];

    return (
        <div className="pt-3 pb-4" style={{ backgroundColor: "rgba(8, 59, 7, 0.91)" }}>
            <div className="container">
                <div className="row row-cols-2 row-cols-md-4 g-4 text-center">
                    {stats.map((stat) => (
                        <div className="col" key={stat.label}>
                            <h2 className="fw-bold mb-0" style={{ color: "rgb(227, 162, 60)" }}>
                                {stat.value}
                                <span className="fw-bold" style={{ color: "rgb(253, 253, 253)" }}>+</span>
                            </h2>
                            <p style={{ color: "rgb(253, 253, 253)" }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};
export default KeyHighlights;