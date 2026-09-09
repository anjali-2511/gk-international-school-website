function CTA() {
    return (
        <>

            <div className="text-center p-5" style={{ backgroundColor: "rgb(219, 145, 43)" }}>
                <h3 className="fw-bold" style={{ color: "rgb(20, 30, 60)" }}>
                    Come Experience Our Campus
                    <hr style={{ borderColor: "rgb(10, 10, 10)", opacity: 0.9, width: "400px", margin: "7px auto" }} />
                </h3>
                <p className="pt-2" style={{ color: "rgb(60, 45, 20)" }}>
                    Book a tour and see our facilities and student life first-hand.
                </p>
                <button
                    className="btn fw-bold border-0 rounded-4 px-4 py-2 mt-2"
                    style={{ backgroundColor: "rgb(20, 30, 60)", color: "rgb(255, 255, 255)" }}
                >
                    Schedule a Campus Tour →
                </button>
            </div>

        </>
    )
};
export default CTA;