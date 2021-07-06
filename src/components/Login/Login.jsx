import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';

const Login = () => {
    return(
        <main class="fashion-login">
        	<HeaderComponent />
            <div class="fashion-login__block">
            	<div class="fashion-login__con container">
            		<div class="fashion-login__log">
            			<h3>SIGN IN</h3>
            			<input type="text" placeholder="Your Email"/>
            			<input type="text" placeholder="Your Password"/>
            			<button type="submit">Login</button>
            		</div>
					<div class="vertborder"></div>
            		<div class="fashion-login__log">
            			<h3>REGISTER</h3>
            			<input type="text" placeholder="Your Email"/>
            			<input type="text" placeholder="Your Password"/>
            			<input type="text" placeholder="Confirm Password"/>
            			<button type="submit">Register</button>
            		</div>
            	</div>
            </div>
        </main>
    )
}

export default Login;