import React from 'react';
import planeJPG from '../../static/plane.jpg';
import planeWEBP from '../../static/plane.webp';
import {Link} from 'react-router-dom'

const Item = () => {
    return(
        <div class="fashion-content__item">
            <div class="fashion-content__item-img">
                <picture>
                    <source srcset={planeWEBP} type="image/webp"/>
                    <img src={planeJPG} alt="img"/>
                </picture>
            </div>
            <h1><b>Title of the item</b></h1>
            <h3>Price: 70$</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus, cumque perferendis architecto quam assumenda animi deleniti impedit aut ab.</p>
            <div class="fashion-content__item-btn">
                <Link to="/item">View</Link>
                <button>Buy</button>
            </div>
        </div>
    )
}

export default Item;