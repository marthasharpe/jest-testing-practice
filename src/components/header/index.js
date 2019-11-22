import React from 'react';
import './styles.scss';
import Logo from './../../assets/web-slinger.png';

const Header = (props) => {
    return (
        <header data-test='headerComponent'>
            <div className='wrap'>
                <div className='logo'>
                    <img
                        data-test='logoIMG'
                        src={Logo}
                        alt='web-slinger'
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;