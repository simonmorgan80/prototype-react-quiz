import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div className="page">

        	<div className="page__content text-center">
	            <h1>React Quiz</h1>

	            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

	            <Link to="/profile" className="button">Lets start</Link>
            </div>

        </div>
    )
}

export default Home;
