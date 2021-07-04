import React from 'react'

const ListItem = () => {
    return (
        <li className="fashion-header__nav-item"><a href="#"><i className="down"></i>MENS</a>
            <div className="fashion-header__dropdown-menu">
                <ul className="fashion-header__drop-list">
                    <li className="fashion-header__drop-item">CASUALS</li>
                    <li className="fashion-header__drop-item"><a href="#">Jackets</a></li>
                    <li className="fashion-header__drop-item"><a href="#">Hoodies & Sweatshirts</a></li>
                    <li className="fashion-header__drop-item"><a href="#">Polo Shirts</a></li>
                    <li className="fashion-header__drop-item"><a href="#">Sportswear</a></li>
                    <li className="fashion-header__drop-item"><a href="#">Trousers & Chinos</a></li>
                    <li className="fashion-header__drop-item"><a href="">T-Shirts</a></li>
                </ul>
                <ul className="fashion-header__drop-list">
                    <li className="fashion-header__drop-item">FORMAL</li>
                    <li className="fashion-header__drop-item"><a href="#">Jackets</a></li>
                    <li className="fashion-header__drop-item"><a href="#">Shirts</a></li>
                    <li className="fashion-header__drop-item"><a href="#">Suits</a></li>
                    <li className="fashion-header__drop-item"><a href="#">Trousers</a></li>
                </ul>
                <div className="fashion-header__drop-banner">
                    <h1 className="title">AUTUMN SALE!</h1>
                    <h1>UP TO 50% OFF</h1>
                </div>
            </div>
        </li>
    )
}

export default ListItem;