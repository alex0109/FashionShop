import React from 'react';

//Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

//Component
import HeaderComponent from '../HeaderComponent/HeaderComponent';

//Static
import RedJPG from '../../static/red.jpg';
import RedWEBP from '../../static/red.webp';
import LineJPG from '../../static/line.jpg';
import LineWEBP from '../../static/line.webp';
import PlaneJPG from '../../static/plane.jpg';
import PlaneWEBP from '../../static/plane.webp';

const ItemMain = () => {
    return(
        <main className="fashion-block">
            <HeaderComponent />
            <div className="fashion-product__view">
                <div className="fashion-product__con container">
                    <div className="fashion-product__desk1">
                        <div className="fs-product__itemBlock">
                            <Splide options={ {
                                type: 'loop',
                                rewind : true,
                                width  : 600,
                                gap    : '1px',
                                updateOnMove: true,
                                pagination: false,
                            } }>
                                <SplideSlide>
                                    <div className="fashion-product__slider-line">
                                        <picture>
                                            <source srcset={RedWEBP} type="image/webp"/>
                                            <img src={RedJPG} alt="img"/>
                                        </picture>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="fashion-product__slider-line">
                                        <picture>
                                            <source srcset={LineWEBP} type="image/webp"/>
                                            <img src={LineJPG} alt="img"/>
                                        </picture>
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="fashion-product__slider-line">
                                        <picture>
                                            <source srcset={PlaneWEBP} type="image/webp"/>
                                            <img src={PlaneJPG} alt="img"/>
                                        </picture>
                                    </div>
                                </SplideSlide>
                            </Splide>
                        </div>
                        <div className="fashion-product__info">
                            <div className="fashion-product__name">AVE classNameIC SWEATSHIRT</div>
                            <ul className="fashion-product__share-list">
                                <li className="fashion-product__share-item">
                                    <p>3 Review(s)</p>
                                </li>
                                <li className="fashion-product__sahre-item">
                                    <a href="#">| Add a Review |</a>
                                </li>
                                <li className="fashion-product__sahre-item">
                                    <p>Share: </p>
                                </li>
                            </ul>
                            <div className="fashion-product__price">40.99$</div>
                            <ul className="fashion-product__atributs-list">
                                <li className="fashion-product__atributs-item">AVAILABILITY: In stock</li>
                                <li className="fashion-product__atributs-item">PRODUCT CODE: #499577</li>
                                <li className="fashion-product__atributs-item">TAGS: 
                                    <a href="#">classNameicc, </a>
                                    <a href="#">Casual, </a>
                                    <a href="#">V-nack</a>
                                </li>
                            </ul>
                            <div className="fashion-product__description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minima, quod, ea sit quae accusamus quia adipisci velit rerum nam.</p>
                                <ul>
                                    <li>Elasticated cuffs</li>
                                    <li>Casual fit</li>
                                    <li>100% Cotton</li>
                                    <li>Free shipping with 4 days delivery</li>
                                </ul>
                            </div>
                            <ul className="fashion-product__fields">
                                <li>COLOUR
                                    <select>
                                        <option disabled selected>Select colour</option>
                                        <option>Red</option>
                                        <option>Green</option>
                                        <option>Black</option>
                                    </select>
                                </li>
                                <li>SIZE
                                    <select>
                                        <option disabled selected>Select size</option>
                                        <option>42</option>
                                        <option>41</option>
                                        <option>40</option>
                                    </select>
                                </li>
                                <li>
                                    QTY<input type="number" value="1"/>
                                </li>
                            </ul>
                            <button className="fashion-product__btn">add to cart</button>
                            <button className="fashion-product__btn">add to lookbook</button>
                        </div>
                    </div>
                    <div className="fashion-product__desk2">
                        <div className="fashion-product__about">
                            <ul className="fashion-product__list">
                                <li className="fashion-product__item">VIDEO</li>
                                <li className="fashion-product__item">SIZE & SPECS</li>
                                <li className="fashion-product__item">DELIVARY & RETURNS</li>
                                <li className="fashion-product__item">REVIEWS</li>
                            </ul>
                            <div className="fashion-product__text">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores nostrum ut a dolor sed earum, nobis, neque quas quam ab accusantium officiis laudantium tenetur recusandae? Distinctio, doloribus molestiae, quae iste nobis impedit labore, obcaecati blanditiis vel ipsum sunt assumenda deleniti? <br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo neque doloremque eveniet, odio quisquam quia suscipit modi blanditiis pariatur consequuntur repellat tempore nisi error. Repudiandae laboriosam, nemo quia. Itaque, doloribus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ItemMain;

{/* <div className="fashion-product__slide-back">
    <button className="slide-btn" id="prev">
        <i className="left"></i>
    </button>
</div>
<div className="fashion-product__slider">
    <div className="fashion-product__slider-line">
        <picture>
            <source srcset={RedWEBP} type="image/webp"/>
            <img src={RedJPG} alt="img"/>
        </picture>
        <picture>
            <source srcset={LineWEBP} type="image/webp"/>
            <img src={LineJPG} alt="img"/>
        </picture>
        <picture>
            <source srcset={PlaneWEBP} type="image/webp"/>
            <img src={PlaneJPG} alt="img"/>
        </picture>
    </div>
</div>
<div className="fashion-product__slide-next">
    <button className="slide-btn" id="next">
        <i className="right"></i>
    </button>
</div> */}