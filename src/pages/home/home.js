import React from 'react';
import './home.scss';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render() {
        return (
            <div className="home">
                Homepage content with a button.
                <Link to="../profile">
                    <Button text="Update Profile"/>
                </Link>
            </div>   
        );
    }
}

export default Home;

