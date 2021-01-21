import React from 'react';
import PropTypes from 'prop-types';
import './view.scss';

class Profile extends React.Component{
    constructor(props) {
        super(props);
    }
    static get propTypes() { 
        return { 
            profileData: PropTypes.any
        }; 
    }
    render() {
        return (
            <div className="view-profile">
                <p>
                    <strong>Name: </strong> {this.props.profileData.name}
                </p>
                <p>
                    <strong>Email: </strong> {this.props.profileData.email}
                </p>
                <p>
                    <strong>About: </strong> {this.props.profileData.about}
                </p>
                <p>
                    <strong>Address: </strong> {this.props.profileData.address}
                </p>
                <p>
                    <strong>Friends: </strong><br/> {this.props.profileData.friends && this.props.profileData.friends.map((friend, index) => (
                        <span key={index}>{friend.name}<br/></span>
                    ))}
                </p>
            </div>
        );
    }
}

export default Profile;

