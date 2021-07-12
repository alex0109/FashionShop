import React from 'react';
import Item from './Item';
import ItemContainer from './ItemComponent';

const Content = () => {
    return(
        <div class="fashion-content__stuff">
            <div class="fashion-content__container-stuff container">
                <Item />
            </div>
            <div class="fashion-header__slider-btn">
                <button>Go to the item</button>
            </div>
        </div>
    )
}

export default Content;