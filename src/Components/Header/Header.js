import React from 'react';
import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <a className='logo' href="#">BrandName</a>
                <div className="sandwich-menu"><i className="fas fa-bars"></i></div>
            </div>
        </div>
    )
}

export default Header
