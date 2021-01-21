import React, { useState, useEffect } from 'react';
import ProfileHeader from './components/profile/header/header';
import Navigation from './components/navigation/navigation';
import Button from './components/button/Button'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';

const apiURL = "https://api.github.com/users/palower";

function App() {
    const [apiData, setApiData] = useState({});
    const [profileData, setProfileData] = useState([]);
    const getProfileData = ()=>{
      fetch('data.json',
        {
          headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
          }
        }
       ).then(function(response){
         console.log(response);
         return response.json();
       }).then(function(myJson){
          console.log(myJson);
          setProfileData(myJson);
       });
    }

    useEffect(() => {
      getAPIWithFetch();
      getProfileData();
    }, []);
    
    const getAPIWithFetch = async () => {
      const response = await fetch(apiURL);
      const jsonData = await response.json();
      setApiData(jsonData);
    };
  
  return (
    <Router>
      <div className="app">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <ProfileHeader name={apiData.login} avatar={apiData.avatar_url} email={profileData.email} />
            </div>
            <div className="col-9">
              <Navigation/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Switch>
                  <Route exact key="Home" path="/" component={Home} />
                  <Route exact key="Button" path='/button' component={Button} />
                  <Route exact key="Profile" path='/profile' render={(props) => (<Profile profileData={profileData} {...props}/>)} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
