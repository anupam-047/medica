import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
import pressOnBar from './Nav.js';

const Header = () => {
    const { user, logOut } = useAuth();

    const navStyle = { color: 'limegreen', fontWeight: 'bold', caretColor: 'transparent', textDecoration: 'none' };
    return (
        <div className="header" id="header">
            <nav className="nav">
                <div>
                    <NavLink to="/"><img src="./logo.png" className="header-image" width="150px" title="Medica" alt="Medica" /></NavLink>
                    <NavLink className="navlink" activeStyle={navStyle} to="/home">Home</NavLink>
                    <NavLink className="navlink" activeStyle={navStyle} to="/place-order">Doctor Details</NavLink>
                    <NavLink className="navlink" activeStyle={navStyle} to="/shipping">Appoinment</NavLink>
                    <NavLink className="navlink" activeStyle={navStyle} to="/Contacts">Contacts</NavLink>
                    {
                        (user?.email || user?.displayName) ?
                            <span>
                                <span className="mx-3 fw-bolder text-success">{user?.displayName}</span>

                                <span className="ms-1 me-4">
                                    <img src={user?.photoURL} width="30px" className="rounded-pill border border-warning border-2" alt={user?.displayName} />
                                </span>

                                <Button onClick={logOut} className="navlink bg-success" variant="contained">Logout</Button>
                            </span>
                            :
                            <NavLink className="navlink" activeStyle={navStyle} to="/login"><Button variant="contained" className="bg-danger">Login</Button></NavLink>
                    }
                </div>
            </nav>

            <nav className="mobile-nav">
                <a href="/"><img src="./favicon.ico" width="30px" title="Medica" alt="Medical" /></a>
                <i className="fas fa-bars fa-2x" id="menu-bar" onClick={pressOnBar}></i>
            </nav>
            <div className="menu">
                <NavLink className="navlink" activeStyle={navStyle} to="/home">Home</NavLink>
                <NavLink className="navlink" activeStyle={navStyle} to="/place-order">Doctor Details</NavLink>
                <NavLink className="navlink" activeStyle={navStyle} to="/shipping">Appoinment</NavLink>
                {
                    (user?.email || user?.displayName) ?
                        <span>
                            <span className="mx-3 fw-bolder text-success">{user?.displayName}</span>

                            <span className="ms-1 me-4">
                                <img src={user?.photoURL} width="30px" className="rounded-pill border border-warning border-2" alt={user?.displayName} />
                            </span>

                            <Button onClick={logOut} className="navlink bg-success" variant="contained">Logout</Button>
                        </span>
                        :
                        <NavLink className="navlink" activeStyle={navStyle} to="/login"><Button variant="contained" className="bg-danger">Login</Button></NavLink>
                }
            </div>
        </div >
    );
};

export default Header;