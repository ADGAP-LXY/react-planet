import React from 'react'; 
import './index.css';

class Button extends React.Component {

    render() {
        return (
            <button {...this.props}>
                <svg
                    viewBox="0 0 8 14"
                >
                    <path
                        d="M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z"
                        fill="currentColor"
                    />
                </svg>
            </button>
        )
    }

}

// class 

export default Button;