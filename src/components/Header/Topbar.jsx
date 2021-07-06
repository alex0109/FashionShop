import React from 'react';
import cartPNG from '../../static/cart.png';
import cartWEBP from '../../static/cart.webp';

import {Link} from "react-router-dom";

const Topbar = () => {
    return(
        <div className="fashion-header__top-bar">
            <div className="fashion-header__container container">
                <ul className="fashion-header__top-list">
                    <li className="fashion-header__top-items"><Link to="/login">Register</Link></li>
                    <li className="fashion-header__top-items"><Link to="/login">Sign in</Link></li>
                </ul>
                <button className="fashion-header__btn-cart">
                    <picture>
                        <source srcset={cartWEBP} type="image/webp"/>
                        <img src={cartPNG} alt="img"/>
                    </picture>
                    <p id="items-value">0</p>
                </button>
            </div>
        </div>
    )
}

export default Topbar;