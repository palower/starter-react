import React from 'react';
import './home.scss';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import strings from '../../strings';

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="home">
                <p dangerouslySetInnerHTML={strings.home.copy}></p>
                <Link to="../profile">
                    <Button text="Update Profile"/>
                </Link>
            </div>   
        );
    }
}

export default Home;

