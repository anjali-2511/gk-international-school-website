// import logo from "../public/logo.png";
import './header.css';
import { Link } from "react-router-dom";

function Header() {
    const logo = "/logo.png";
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark w-100 p-2" style={{ backgroundColor: "rgb(69, 76, 99)" }}>
                <div className="container-fluid align-items-center">

                    <a className="navbar-brand fw-bold ms-lg-3 d-flex align-items-center" href="#">
                        <img src={logo} width="50" height="50" alt="" className="header-logo" />
                    </a>

                    <div className="header-title d-none d-md-block">
                        <h3 style={{ color: "rgb(149, 151, 224)" }} className="header-title-text mb-0">
                            GoglyaKrish International School
                        </h3>
                        <p style={{ color: "rgb(194, 192, 190)" }} className="header-subtitle mb-0 ps-4">
                            LEARN TODAY | LEAD TOMORROW
                        </p>
                    </div>

                    <button
                        style={{ backgroundColor: "rgb(56, 65, 89)" }}
                        className="navbar-toggler m-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        {/* Show title/subtitle inside collapsed menu on small screens */}
                        <div className="header-title d-block d-md-none text-center py-2">
                            <h3 style={{ color: "rgb(149, 151, 224)" }} className="header-title-text mb-0">
                                GoglyaKrish International School
                            </h3>
                            <p style={{ color: "rgb(194, 192, 190)" }} className="header-subtitle mb-0">
                                LEARN TODAY | LEAD TOMORROW
                            </p>
                        </div>

                        <ul className="navbar-nav align-items-lg-center mx-lg-auto text-center">

                            <li className="nav-item ms-lg-4 me-lg-4">
                                <Link
                                    className="nav-link"
                                    style={{ color: "rgb(239, 240, 250)" }}
                                    to="/"
                                    end
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item ms-lg-4 me-lg-4">
                                <Link className="nav-link" style={{ color: "rgb(239, 240, 250)" }} to="/about">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item ms-lg-4 me-lg-4">
                                <Link className="nav-link" style={{ color: "rgb(239, 240, 250)" }} to="/academics">
                                    Academics
                                </Link>
                            </li>

                            <li className="nav-item ms-lg-4 me-lg-4">
                                <Link className="nav-link" style={{ color: "rgb(239, 240, 250)" }} to="/facilities">
                                    Facilities
                                </Link>
                            </li>

                            <li className="nav-item ms-lg-4 me-lg-4">
                                <Link className="nav-link" style={{ color: "rgb(239, 240, 250)" }} to="/admission">
                                    Admission
                                </Link>
                            </li>
                        </ul>

                        <div className="d-flex justify-content-center justify-content-lg-end my-2 my-lg-0 me-lg-3">
                            <button
                                className="btn btn-dark px-3 py-2 rounded-5 d-inline-flex align-items-center"
                                style={{ backgroundColor: "rgb(104, 115, 145)" }}
                            >
                                Apply Now <i className="fa-solid fa-square-up-right ms-2"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
};
export default Header;