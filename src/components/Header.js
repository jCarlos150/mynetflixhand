import React from 'react';
import './Header.css';
import logo from './logo.png';
import perfil from './perfil.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ black }) => {
    console.log(black)
    return <header className={black ? 'black' : ''}>
        <div className="Header--logo">
            <img src={logo} alt='logo' />
        </div>
        <div className="Header--perfi">
            <img src={perfil} alt="perfil" />
        </div>
    </header>
}
