function PromotionalSection() {
    return (
        <>
            <div className="w-100 h-100 " style={{ backgroundColor: "rgb(13, 24, 73)" }}>
                <table>
                    <tr>
                        <th className="w-75 h-100 m-5 p-3 ps-5 pe-5">
                            <div className="ms-3" style={{ backgroundColor: "rgb(13, 24, 73)" }}>
                                <h5 className="fw-bold" style={{ color: "rgb(235, 163, 47)" }}>Seat Fillings Fast!</h5>
                                <h5 style={{ color: "rgb(250, 250, 249)" }}>Admissions Open - Nursery to Grade 12</h5>
                                <p style={{ color: "rgb(199, 197, 194)" }}>Early applicants get priority in transport & sibling admissions. Limited seats per section.</p>
                                <div className="w-50 h-50">
                                    <table className="table-responsive">
                                        <tr>
                                            <th className="border border-secondary rounded-pill p-2">
                                                <tr className="border border-secondary " style={{ color: "rgb(235, 163, 47)" }}>12</tr>
                                                <tr className="border border-secondary " style={{ color: "rgba(177, 174, 171, 0.79)" }}>Days</tr>

                                            </th>
                                            <th className="border border-secondary  rounded-3 p-2">
                                                <tr className="border border-secondary" style={{ color: "rgb(235, 163, 47)" }}>08</tr>
                                                <tr className="border border-secondary" style={{ color: "rgba(177, 174, 171, 0.79)" }}>Hours</tr>
                                            </th>
                                            <th className="border border-secondary  rounded-3 p-2">
                                                <tr className="border border-secondary" style={{ color: "rgb(235, 163, 47)" }}>42</tr>
                                                <tr className="border border-secondary" style={{ color: "rgba(177, 174, 171, 0.79)"}}>Mins</tr>
                                            </th>
                                        </tr>

                                    </table>

                                </div>
                            </div>

                        </th>


                        <th className=" w-100 p-2 h-100">
                            <div className="ms-5 m-5 w-75">
                                <button className="btn btn-dark fw-bold border-0 rounded-5  ps-3 w-100 d-inline-flex align-items-center" style={{ backgroundColor: "rgb(235, 163, 47)", color: "rgb(13, 24, 73)" }}>Start Application  <i class="fa-solid fa-arrow-right"></i></button>
                            </div>

                        </th>


                    </tr>
                </table>
            </div>
        </>
    )
};
export default PromotionalSection;