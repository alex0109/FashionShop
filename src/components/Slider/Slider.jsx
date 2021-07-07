import React from 'react';

//Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

//Static
import RedJPG from '../../static/red.jpg';
import RedWEBP from '../../static/red.webp';
import LineJPG from '../../static/line.jpg';
import LineWEBP from '../../static/line.webp';
import PlaneJPG from '../../static/plane.jpg';
import PlaneWEBP from '../../static/plane.webp';

const Slider = () => {
    return(
        <div class="fashion-header__slider-block">
            <div class="fashion-header__slider-con container">
                <div class="fashion-header__slider">
                <Splide
                options={ {
                    type: 'loop',
                    rewind : true,
                    width  : 1200,
                    gap    : '1rem',
                    pagination: true,
                    arrows: false,
                    autoplay: true,
                } }
                >
                    <SplideSlide>
                        <picture>
                            <source srcset={LineWEBP} type="image/webp"/>
                            <img src={LineJPG} alt="img"/>
                        </picture>
                    </SplideSlide>
                    <SplideSlide>
                        <picture>
                            <source srcset={RedWEBP} type="image/webp"/>
                            <img src={RedJPG} alt="img"/>
                        </picture>
                    </SplideSlide>
                    <SplideSlide>
                        <picture>
                            <source srcset={PlaneWEBP} type="image/webp"/>
                            <img src={PlaneJPG} alt="img"/>
                        </picture>
                    </SplideSlide>
                </Splide>
                </div>
                <div class="fashion-header__slider-btn">
                    <button>Go to the item</button>
                </div>
            </div>
        </div>
    )
}

export default Slider;