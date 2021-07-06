import React from 'react';
import Slider from '../Slider/Slider';


const Bar = () => {
    return(
        <div>
            <Slider />
            <hr/>
            <div class="fashion-content__bar">
                <div class="fashion-content__container-bar container">
                    <ul class="fashion-content__list">
                        <li class="fashion-content__list-item"><a href="#">POPULAR</a></li>
                        <li class="fashion-content__list-item"><a href="#">NEW ARRIVALS</a></li>
                        <li class="fashion-content__list-item"><a href="#">BEST SELLERS</a></li>
                        <li class="fashion-content__list-item"><a href="#">SPECIAL OFFERS</a></li>
                        <li class="fashion-content__list-item"><a href="#">COMING SOON</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Bar;