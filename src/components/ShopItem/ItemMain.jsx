import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';

import RedJPG from '../../static/red.jpg';
import RedWEBP from '../../static/red.webp';
import LineJPG from '../../static/line.jpg';
import LineWEBP from '../../static/line.webp';
import PlaneJPG from '../../static/plane.jpg';
import PlaneWEBP from '../../static/plane.webp';

const ItemMain = () => {
    return(
        <main class="fashion-product">
            <HeaderComponent />
            <div class="fashion-product__view">
                <div class="fashion-product__con container">
                    <div class="fashion-product__desk1">
                        <div class="fashion-product__slide-back">
                            <button class="slide-btn" id="prev">
                                <i class="left"></i>
                            </button>
                        </div>
                        <div class="fashion-product__slider">
                            <div class="fashion-product__slider-line">
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
                        <div class="fashion-product__slide-next">
                            <button class="slide-btn" id="next">
                                <i class="right"></i>
                            </button>
                        </div>
                        <div class="fashion-product__info">
                            <div class="fashion-product__name">AVE CLASSIC SWEATSHIRT</div>
                            <ul class="fashion-product__share-list">
                                <li class="fashion-product__share-item">
                                    <p>3 Review(s)</p>
                                </li>
                                <li class="fashion-product__sahre-item">
                                    <a href="#">| Add a Review |</a>
                                </li>
                                <li class="fashion-product__sahre-item">
                                    <p>Share: </p>
                                </li>
                            </ul>
                            <div class="fashion-product__price">40.99$</div>
                            <ul class="fashion-product__atributs-list">
                                <li class="fashion-product__atributs-item">AVAILABILITY: In stock</li>
                                <li class="fashion-product__atributs-item">PRODUCT CODE: #499577</li>
                                <li class="fashion-product__atributs-item">TAGS: 
                                    <a href="#">Classicc, </a>
                                    <a href="#">Casual, </a>
                                    <a href="#">V-nack</a>
                                </li>
                            </ul>
                            <div class="fashion-product__description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum minima, quod, ea sit quae accusamus quia adipisci velit rerum nam.</p>
                                <ul>
                                    <li>Elasticated cuffs</li>
                                    <li>Casual fit</li>
                                    <li>100% Cotton</li>
                                    <li>Free shipping with 4 days delivery</li>
                                </ul>
                            </div>
                            <ul class="fashion-product__fields">
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
                            <button class="fashion-product__btn">add to cart</button>
                            <button class="fashion-product__btn">add to lookbook</button>
                        </div>
                    </div>
                    <div class="fashion-product__desk2">
                        <div class="fashion-product__about">
                            <ul class="fashion-product__list">
                                <li class="fashion-product__item">VIDEO</li>
                                <li class="fashion-product__item">SIZE & SPECS</li>
                                <li class="fashion-product__item">DELIVARY & RETURNS</li>
                                <li class="fashion-product__item">REVIEWS</li>
                            </ul>
                            <div class="fashion-product__text">
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