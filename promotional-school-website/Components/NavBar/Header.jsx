// import logo from "../public/logo.png";
import './header.css';
import { Link } from "react-router-dom";

function Header() {
    const logo = "/logo.png";
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark w-100 p-2" style={{ backgroundColor: "rgb(57, 63, 82)" }}>

                <a className="navbar-brand fw-bold ms-3" href="#">
                    <img src={logo} width="50" height="50" alt="" />
                </a>
                <div>
                    <h3 style={{ color: "rgb(149, 151, 224)" }} >GoglyaKrish International School</h3>
                    <p style={{ color: "rgb(194, 192, 190)" }}>LEARN TODAY |  LEAD TOMORROW</p>
                </div>

                <button style={{ BackgroundColor: "rgb(56, 65, 89)" }} className="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"  ></span>
                </button>

                <div className=" collapse navbar-collapse ms-5 me-3" id="navbarNav">

                    <ul className="navbar-nav align-items-lg-center ">

                        <li className="nav-item ms-4 me-4">
                            <Link className="nav-link active" style={{ color: "rgb(239, 240, 250)" }} to="/">Home</Link>
                        </li>

                        <li className="nav-item ms-4 me-4">
                            <Link className="nav-link" style={{ color: "rgb(239, 240, 250)" }} to="/about">About</Link>
                        </li>

                        <li className="nav-item ms-4 me-4">
                            <Link className="nav-link" style={{ color: "rgb(239, 240, 250)" }} to="/academics">Academics</Link>
                        </li>

                        <li className="nav-item ms-4 me-4">
                            <Link className="nav-link" style={{ color: "rgb(239, 240, 250)" }} to="/facilities">Facilities</Link>
                        </li>

                        <li className="nav-item ms-4 me-4">
                            <Link className="nav-link" style={{ color: "rgb(239, 240, 250)" }} to="/admission">Admission</Link>
                        </li>
                    </ul>

                    <div className="ms-auto">
                        <button className="btn btn-dark  px-3 py-3 rounded-5 d-inline-flex align-items-center" style={{ backgroundColor: "rgb(104, 115, 145)" }}>
                            Apply Now <i className="fa-solid fa-square-up-right" ></i>
                        </button>
                    </div>
                </div>


            </nav>
        </>
    )
};
export default Header;
