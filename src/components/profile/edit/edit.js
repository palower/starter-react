import React from 'react';
import PropTypes from 'prop-types';
import './edit.scss';

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
            <div className="edit-profile">
                <p>
                    <strong>Name: </strong> <input type="text" defaultValue={this.props.profileData.name}/>
                </p>
                <p>
                    <strong>Email: </strong> <input type="text" defaultValue={this.props.profileData.email}/>
                </p>
                <p>
                    <strong>About: </strong> <textarea type="text" value={this.props.profileData.about}/>
                </p>
                <p>
                    <strong>Address: </strong> <input type="text" defaultValue={this.props.profileData.address}/>
                </p>
            </div>
    );
    }
}

export default Profile;

