import logo from "../public/logo.png";
import './header.css'

function Header() {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark w-100 p-2" style={{ backgroundColor: "rgb(249, 244, 234)" }}>

                <a className="navbar-brand fw-bold " href="#">
                    <img src={logo} width="50" height="50" alt="" />
                </a>
                <div>
                    <h3 style={{ color: "rgb(56, 65, 89)" }} >GoKrish Vidyalaya</h3>
                    <p style={{ color: "rgb(196, 195, 192)" }}>LEARN TODAY LEAD TOMORROW</p>
                </div>

                <button style={{ BackgroundColor: "rgb(56, 65, 89)" }} className="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"  ></span>
                </button>

                <div className=" collapse navbar-collapse ms-5 me-3" id="navbarNav">

                    <ul className="navbar-nav align-items-lg-center ">

                        <li className="nav-item ms-5 me-5">
                            <a className="nav-link" href="/" style={{ color: "rgb(56, 65, 89)" }}>Home</a>
                        </li>

                        <li className="nav-item ms-5 me-5">
                            <a className="nav-link" href="/" style={{ color: "rgb(56, 65, 89)" }}>About</a>
                        </li>

                        <li className="nav-item ms-5 me-5">
                            <a className="nav-link" href="/" style={{ color: "rgb(56, 65, 89)" }}>Acadmics</a>
                        </li>

                        <li className="nav-item ms-5 me-5">
                            <a className="nav-link" href="/" style={{ color: "rgb(56, 65, 89)" }}> Facilities</a>
                        </li>

                        <li className="nav-item ms-5 me-5">
                            <a className="nav-link" href="/" style={{ color: "rgb(56, 65, 89)" }}>Admission</a>
                        </li>
                    </ul>
                </div>
                 <div className="ms-auto">
                        <button className="btn btn-dark border-white px-2 py-2 rounded-5 d-inline-flex align-items-center" style={{ backgroundColor: "rgb(56, 65, 89)" }}>
                            Apply Now <i className="fa-solid fa-square-up-right" ></i>
                        </button>
                    </div>

            </nav>
        </>
    )
};
export default Header;
