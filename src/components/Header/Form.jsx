import React from 'react';
import loupePNG from '../../static/loupe.png';
import loupeWEBP from '../../static/loupe.webp';

const Form = () => {
    return(
        <form className="fashion-header__search">
            <input type="search" placeholder="Search..."/> 
            <button className="fashion-header__search-btn" type="submit">
                <picture><source srcset={loupeWEBP} type="image/webp"/><img src={loupePNG} alt="img"/></picture>
            </button>
        </form>
    )
}

export default Form;