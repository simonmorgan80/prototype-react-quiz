import React from 'react';
import './Button.css';

const Button = (props) => {

    return (
        <div>

            <button
                onClick={() => props.handler()}
                className="button"
            >
                {props.label}
            </button>

        </div>
    )
}

export default Button;
