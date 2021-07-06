import React from 'react';
import {Link} from "react-router-dom";

const Logo = () => {
    return(
        <div className="fashion-header__logo">
            <Link to="/home"><span className="title">avenue</span> fashion</Link>
        </div>
    )
}

export default Logo;