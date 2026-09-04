import profile from "../public/profile.png";
function PrincipalMessage() {
    return (
        <>
            

            <div className="d-flex justify-content-center p-5" style={{ backgroundColor: "rgb(241, 234, 218)" }}>
                <div className="card border-0 rounded-5 w-75 p-5 m-5 shadow-lg" style={{ backgroundColor: "rgb(255, 255, 255)" }}>

                    <table>
                        <tr>
                            <th>
                                <div
                                    className="card border-0 me-1 shadow-lg p-2"
                                    style={{ backgroundColor: "rgb(13, 24, 73)", width: "300px", height: "250px" }}
                                ><img src={profile} alt="" height="235px" />

                                </div>
                            </th>
                            <th>
                                <p style={{ color: "rgb(132, 133, 136)" }}>Education is not just about preparing students for exams - it is about preparing them for life. At GK, we walk alongside every child, helping them discover their strengths and build the confidence to use them.</p>
                                <h4 style={{ color: "rgb(73, 72, 72)" }}>DR. Anjali Shinde</h4>
                                <p style={{ color: "rgb(175, 170, 170)" }}>Principal, GoglyaKrish International School</p>

                            </th>
                        </tr>
                    </table>
                </div>


            </div >
        </>
    )
};
export default PrincipalMessage;