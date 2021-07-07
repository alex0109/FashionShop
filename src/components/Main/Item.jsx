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
            <h1 className="fashion-content__item-title">Title of the item <span className="fashion-content__item-price">70$</span></h1>
            <p className="fashion-content__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus, cumque perferendis architecto quam assumenda animi deleniti impedit aut ab.</p>
            <div class="fashion-content__item-btn">
                <Link to="/item">View</Link>
                <button>Buy</button>
            </div>
        </div>
    )
}

export default Item;