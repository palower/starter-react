import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends React.Component{
    constructor() {
    super();
        this.state = {text: 'Default button text'};
    }
    static get propTypes() { 
        return { 
            text: PropTypes.any,
            onPress: PropTypes.any
        }; 
    }
    render() {
        return (
            <button onClick={this.props.onPress} className="button">{this.props.text ? this.props.text : this.state.text}</button>
        );
    }
}

export default Button;
