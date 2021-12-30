import React from 'react';
import { Search, Language, ExpandMore } from '@material-ui/icons';
import { Avatar } from '@material-ui/core'; 
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
            <img className='header__icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' alt='' />
            </Link>
            <div className='header__center'>
                <input type="text" />
                <Search/>
                </div>
                <div className='header__right'>
                    <p>Become a host</p>
                    <Language />
                    <ExpandMore />
                    <Avatar />
                </div>
        </div>
    )
}

export default Header;
