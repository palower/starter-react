import React, { useState, useEffect } from 'react';
import ProfileHeader from './components/profile/header/header';
import Navigation from './components/navigation/navigation';
import Button from './components/button/Button'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import ReactLogo from "./images/react.svg";
import strings from "./strings";

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
        <header className="container-fluid">
          <div className="row">
            <div className="col-3">
              <ProfileHeader name={apiData.login ? apiData.login : strings.global.welcome.defaultPerson} avatar={apiData.avatar_url ? apiData.avatar_url : ReactLogo} email={profileData.email ? profileData.email : ""} />
            </div>
            <div className="col-9">
              <nav>
                <Navigation/>
              </nav>
            </div>
          </div>
        </header>
        <main className="container">
          <div className="row">
            <div className="col">
              <section>
                <Switch>
                    <Route exact key="Home" path="/" component={Home} />
                    <Route exact key="Button" path='/button' component={Button} />
                    <Route exact key="Profile" path='/profile' render={(props) => (<Profile profileData={profileData} {...props}/>)} />
                </Switch>
              </section>
            </div>
          </div>
        </main>
        <footer className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6">
              <img src={ReactLogo} alt="React Logo"/>
            </div>
            <div className="col-12 col-sm-6 text-right copyright">
              <p>{strings.global.footer.copyright}</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
