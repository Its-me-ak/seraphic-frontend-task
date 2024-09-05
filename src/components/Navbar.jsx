import React, { useState } from 'react'
import { FaXmark, FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
    const [view, setView] = useState(false)
    const handleToggle = () => {
        setView(!view)
    }
    return (
        <>
            <header className="header" id="header">
                <section className="wrapper container">

                    <img src="/assets/img/skor-logo.png" alt="logo" />

                    <div className="burger" id="burger" onClick={() => handleToggle()}>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </div>
                    <span className={view ? "overlay active" : "overlay"}  ></span>
                    <nav className={view ? "navbar-menu active" : "navbar-menu"} id="navbar">
                        <div className='cancel-icon fs-1'>
                            <FaXmark onClick={() => handleToggle()} />
                        </div>
                        <ul className="menu" id="menu">

                            <li className="menu-item">
                                <span className="menu-link" >Home</span>
                            </li>

                            <li className="menu-item"><span className="menu-link">Profile Shared</span></li>

                            <li className="menu-item"><span className="menu-link">Rent Details</span></li>

                            <li className="menu-item">
                                <button>
                                    <span className='lang active'>EN</span>
                                    <span className='lang'>ES</span>
                                </button>
                            </li>

                            <li className="menu-item cursor-pointer">
                                <span className="profile me-2">
                                    CL
                                </span>
                                    <FaAngleDown className='fs-4'/>
                            </li>

                        </ul>
                    </nav>
                </section >
            </header >
        </>
    )
}

export default Navbar
