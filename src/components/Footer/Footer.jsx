import React from 'react';
import facebookPNG from '../../static/facebook.png';
import facebookWEBP from '../../static/facebook.webp';
import twitterPNG from '../../static/twitter.png';
import twitterWEBP from '../../static/twitter.webp';
import instagramPNG from '../../static/instagram.png';
import instagramWEBP from '../../static/instagram.webp';
import telegramPNG from '../../static/telegram.png';
import telegramWEBP from '../../static/telegram.webp';

const Footer = () => {
    return(
        <footer class="fashion-footer">
            <div class="fashion-footer__con container">
                <div class="fashion-footer__lists">
                    <ul class="fashion-footer__list">
                        <li>INFORMATION</li>
                        <li><a href="#">The brand</a></li>
                        <li><a href="#">Local stores</a></li>
                        <li><a href="#">Customer service</a></li>
                        <li><a href="#">Privacy & cookies</a></li>
                        <li><a href="#">Site map</a></li>
                    </ul>
                    <ul class="fashion-footer__list">
                        <li>WHY BUY FROM US</li>
                        <li><a href="#">Shipping & returns</a></li>
                        <li><a href="#">Secure shopping</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Award winning</a></li>
                        <li><a href="#">Ethical trading</a></li>
                    </ul>
                    <ul class="fashion-footer__list">
                        <li>YOUR ACCOUNT</li>
                        <li><a href="#">Sign in</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">View cart</a></li>
                        <li><a href="#">View your lookbook</a></li>
                        <li><a href="#">Track an order</a></li>
                        <li><a href="#">Update infomation</a></li>
                    </ul>
                    <ul class="fashion-footer__list">
                        <li>LOOKBOOK</li>
                        <li><a href="#">Latest posts</a></li>
                        <li><a href="#">Mens's lookbook</a></li>
                        <li><a href="#">Woman's lookbook</a></li>
                        <li><a href="#">Lookbook RSS feed</a></li>
                        <li><a href="#">View your lookbook</a></li>
                        <li><a href="#">Delete your lookbook</a></li>
                    </ul>
                    <ul class="fashion-footer__list">
                        <li>CONTACT DETAILS</li>
                        <li>Head Office: Avenue Fashion,<br/>180-182 Regent Street, London.</li>
                        <li>Telephone: 0123-456-789</li>
                        <li>email: support@yourwebsite.com</li>
                    </ul>
                </div>
                <div class="fashion-footer__banners-block">
                    <div class="fashion-footer__banner banner1">
                        <h1 class="title">AWARD WINNER</h1>
                        <h1>FASHION AWARDS 2016</h1>
                    </div>
                    <div class="fashion-footer__banner banner2">
                        <a href="#"><picture><source srcset={facebookWEBP} type="image/webp"/><img src={facebookPNG} alt="img"/></picture></a>
                        <a href="#"><picture><source srcset={twitterWEBP} type="image/webp"/><img src={twitterPNG} alt="img"/></picture></a>
                        <a href="#"><picture><source srcset={instagramWEBP} type="image/webp"/><img src={instagramPNG} alt="img"/></picture></a>
                        <a href="#"><picture><source srcset={telegramWEBP} type="image/webp"/><img src={telegramPNG} alt="img"/></picture></a>
                    </div>
                </div>
            </div>
            <div class="fashion-footer__footer">
                <div class="fashion-footer__con2 container">
                    <p>By Reybey</p>
                    <p>Design by RobbyDesigns.com</p>
                    <p>Dev by Loremipsum.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;