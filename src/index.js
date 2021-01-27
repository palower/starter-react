import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';

//var element = React.createElement("h1", {className: "greeting"}, "Hello World!");
//ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

//set as array to use more than one component
//ReactDOM.render([<App />], document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
