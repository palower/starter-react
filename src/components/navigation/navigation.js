import React from 'react';
import './navigation.scss';
import { Link } from 'react-router-dom';

class Navigation extends React.Component{
    render() {
        return (
            <ul className="global-nav">
                <li><Link to={'/'} className="nav-link">Home</Link></li>
                <li><Link to={'/profile'} className="nav-link">Profile</Link></li>
                <li><Link to={'/button'} className="nav-link">Button</Link></li>
                <li><a href="https://github.com/palower" target='_blank' rel="noopener noreferrer" className="nav-link">Git</a></li>
            </ul>
        );
    }
}

export default Navigation;
