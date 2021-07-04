import React from 'react';
import ListItem from './ListItem';
import Form from './Form';

const Nav = () => {
    return(
        <nav className="fashion-header__nav">
            <ul className="fashion-header__nav-list">
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </ul>
            <Form/>
        </nav>
    )
}

export default Nav;