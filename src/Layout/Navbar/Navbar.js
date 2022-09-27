import React from "react";
import './Navbar.module.css'
import logo from '../../Images/logo.2png.gif'
import 'animate.css';

import { Link } from "react-router-dom";
const Navbar = (props) => {
    return (
        <>
            <nav className="navbar  navbar-expand-lg sticky-top navbar-light   animate__animated animate__slideInLeft">
                <div className="container">
                    <Link className="logo navbar-brand animate-pulse  d-flex justify-center align-items-center gap-2 py-0 m-0" to="/">
                        <img src={logo} alt="logo" />
                        <span className="text-red-500 font-bold">Devloma</span>
                    </Link>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item w-fit  mx-auto rounded-pill text-center">
                                <Link className={props.home} to="/#">الرئيسية</Link>
                            </li>
                            <li className="nav-item w-fit mx-auto rounded-pill">
                                <div className="dropdown ">
                                    <button className="btn border-0 text-white nav-link  d-flex justify-center align-items-center gap-1 m-auto  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        خدماتنا
                                    </button>
                                    <ul className="dropdown-menu h-fit w-fit m-auto bg-slate-700" aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item " to="/#">كلام سيتم تغييرة</Link></li>
                                        <li><Link className="dropdown-item " to="/#">كلام سيتم تغييرة</Link></li>
                                        <li><Link className="dropdown-item  hover:text-red-700" to="/#">كلام سيتم تغييرة</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item w-fit mx-auto rounded-pill">
                                <Link className={props.aboutUs} to="/aboutUs">من نحن</Link>
                            </li>
                            <li className="nav-item w-fit mx-auto rounded-pill">
                                <Link className={props.ourWork} to="/ourWork">اعمالنا</Link>
                            </li>
                            <li className="nav-item w-fit mx-auto rounded-pill">
                                <Link className={props.CompanyProfile} to="/CompanyProfile">بروفايل شركة</Link>
                            </li>
                            <li className="nav-item w-fit mx-auto rounded-pill">
                                <Link className={props.Connect} to="/Connect">تواصل معنا</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;