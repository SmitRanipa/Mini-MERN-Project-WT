import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#735DA5' }}>
            <div className="container-fluid">
                <div className="navbar-brand mb-0 h1" style={{ color: '#ffffff' }}>Food Order Management</div>

                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home" style={{ color: '#ffffff' }}>Add Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/history" style={{ color: '#ffffff' }}>Orders</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{ color: '#ffffff' }}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;