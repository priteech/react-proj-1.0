/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; 

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
 */

import React from 'react';
 import ReactDOM from 'react-dom';
 import * as serviceWorker from './serviceWorker';
 import './App.css';
 import MyInfo from './component/MyInfo';
 import Footer from './component/Footer';
 import App from "./App"
 import MainContent from './component/MainContent';
import header341 from './component/Headre';
import Contact from './contact'

 


 


 
 ReactDOM.render( <body>
     header341
     <MyInfo/>
     <Footer/>
     <MainContent/>
     <Contact A={{Name: "aaaa", Phone:"1122", email:"22ddd@vv"}}/>
     <Contact A={{Name: "baaa", Phone:"2222", email:"ass@vv"}}/>
     <Contact A= {{Name: "Caaa", Phone:"3332", email:"scsf@vv"}}/>
     <Contact A={{Name: "Daa", Phone:"44442", email:"jrhjhj@vv"}}/> 
     <App/>
 </body>,
 
    document.getElementById('root'));
