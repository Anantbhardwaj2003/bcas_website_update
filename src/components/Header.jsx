import React from 'react';
import './Header.css'

function Header() {
    return (
        <header>
            <div className="top-bar">
                <div className='top-bar-social'>
                    <a href="https://instagram.com/bcas_media">
                        <img src="instagram.png" />
                    </a>
                    <a href="#">
                        <img src="twitter.png" />
                    </a>
                    <a href="#">
                        <img src="facebook.png" />
                    </a>
                    <a href="https://youtube.com/@bcas_media">
                        <img src="youtube.png" />
                    </a>
                </div>
                <div className='top-bar-contact'>
                    <div>
                        {/* <img src="telephone.png"/> */}
                        011-508-7597</div>
                    <a href="mailto:bhaskaracharya.college@bcas.du.ac.in" style={{ marginLeft: "1rem" }}>
                        {/* <img src="mail.png"/> */}
                        bhaskaracharya.college@bcas.du.ac.in</a>
                </div>
                <div className="quick-link">
                    <a href="#">login</a>
                    <a href="#" style={{ marginLeft: "1rem" }}>quick links</a>
                </div>
            </div>
            <div className='header-main'>

                <div className="logo">
                    <img src="logo-nobg.png" />
                </div>

                <div className='header-texts'>
                    <div className='college-name'>Bhaskaracharya College Of Applied Sciences</div>
                    <div className='university-name'>University Of Delhi</div>
                    <div className='grading'>
                        NAAC Grade A++ <br />
                        NIRF Rank # 22 (Amongst Colleges)
                    </div>
                </div>

                <div className="collaboration-logo">
                    <img src="aazadi-logo.png" />
                    <img src="du-logo.png" />
                    <img src="g20-logo.png" />
                </div>


            </div>
            <nav>
                <ul className='nav-links'>
                    <li className="dropdown">
                        <a href="#">About</a>
                        <div className="dropdown-content">
                            <a href="#">Principal's Message</a>
                            <a href="#">About Us</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#">Apply</a>
                        <div className="dropdown-content">
                            <a href="#">Principal's Message</a>
                            <a href="#">About Us</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#">Academics</a>
                        <div className="dropdown-content">
                            <a href="#">Principal's Message</a>
                            <a href="#">About Us</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#">News & Events</a>
                        <div className="dropdown-content">
                            <a href="#">Principal's Message</a>
                            <a href="#">About Us</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#">Faculty</a>
                        <div className="dropdown-content">
                            <a href="#">Principal's Message</a>
                            <a href="#">About Us</a>
                        </div>
                    </li>
                </ul>

                <div className="search">
                    <span>Search</span>
                    <img src="search.png" />
                </div>

            </nav>
        </header>
    );
}

export default Header;