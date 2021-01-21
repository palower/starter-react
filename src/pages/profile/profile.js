import React from 'react';
import PropTypes from 'prop-types';
import './profile.scss';
import Button from '../../components/button/Button';
import ViewProfile from '../../components/profile/view/view';
import EditProfile from '../../components/profile/edit/edit';

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formState: true
        };
        this.toggleText = this.toggleText.bind(this);
    }
    static get propTypes() { 
        return { 
            profileData: PropTypes.any
        }; 
    }
    toggleText() {
        this.setState(state => ({
            formState: !state.formState
        }));
    }
    render() {
        // var friends = this.props.profileData.friends;
        // var friendArr = [];
        // Object.keys(friends).forEach(function(key){
        //     friendArr.push(friendArr[key]);
        // });
        return (
            <div className="profile">
                <h1>Profile details:</h1>
                <p><Button onPress={this.toggleText} text={this.state.formState ? "Edit Profile" : "Save"}/></p>
                <div className="formContainer">
                    {this.state.formState ? <ViewProfile profileData={this.props.profileData}/> : <EditProfile profileData={this.props.profileData}/>}
                </div>
            </div>   
        );
    }
}

export default Profile;

