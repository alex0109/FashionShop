import React from 'react';
import Bar from './Bar';
import Content from './Content';
import Lookbook from './Lookbook';

const Main = () => {
    return(
        <main class="fashion-content">
            <hr/>
            <Bar/>
            <Content />
            <hr/>
            <Lookbook />
            <hr/>
        </main>
    )
}

export default Main;