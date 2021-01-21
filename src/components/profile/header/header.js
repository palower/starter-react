import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

class Profile extends React.Component{
    static get propTypes() { 
        return { 
            avatar: PropTypes.any,
            name: PropTypes.any,
            email: PropTypes.any
        }; 
    }
    render() {
        return (
            <div className="profile">
                <div className="profile-top">
                    <div className="col-3">
                        <img src={this.props.avatar} className="profile-logo" alt="logo" />
                    </div>
                    <div className="col-9">
                        <h5>Hi <strong>{this.props.name}</strong></h5>
                    </div>    
                </div>
                
                <div className="col-12">
                    <a href={"mailto:"+this.props.email}>{this.props.email}</a>    
                </div>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </div>   
        );
    }
}

export default Profile;

