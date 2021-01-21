import React from 'react';
import PropTypes from 'prop-types';
import './profile.scss';
import Button from '../../components/button/Button';
import ViewProfile from '../../components/profile/view';

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {formState: true};
    }
    static get propTypes() { 
        return { 
        }; 
    }
    toggleText() {
        this.setState(state => ({
            formState: !state.formState
        }));
        console.log(this.state.formState);
        // this.state.formState === "view" ? this.setState({formState: ""}) : this.setState({formState: "view"});
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
                <p><Button onClick={() => this.toggleText} text={this.state.formState ? "Edit Profile" : "Save"}/></p>

                {this.state.formState ? <ViewProfile/> : <EditProfile/>}


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
            </div>   
        );
    }
}

export default Profile;

