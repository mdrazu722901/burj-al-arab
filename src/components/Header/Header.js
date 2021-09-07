import React from 'react';
import './Header.css';
import header from '../../image/burj-al-arab.png';
import logo from '../../image/logo.jpg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="navbar">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt="" />
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Bool</Link>
                    </li>
                </ul>
            </nav>

            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h3>this is global icon</h3>
            </div>
        </div>
    );
};

export default Header;