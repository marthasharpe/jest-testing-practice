import React from 'react';
import './styles.scss';
import Logo from './../../assets/web-slinger.png';

const Header = () => {
    return (
        <header>
            <div className='wrap'>
                <div className='logo'>
                    <img src={Logo} alt='web-slinger' />
                </div>
            </div>
        </header>
    )
}

export default Header;