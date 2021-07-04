import React from 'react';
import Topbar from './Topbar';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="fashion-header">
            <Topbar/>
            <div className="fashion-header__main-block">
                <div className="fashion-header__nav-block container">
                    <Logo/>
                    <Nav/>
                </div>
            </div>
	</header>
    )
}

export default Header;