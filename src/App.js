import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layouts/Header';
import Contacts from './components/Contacts';
import About from './components/pages/About'
import AddContact from './components/AddContact';
import {Provider} from './Context'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div >
        <Provider>
          <Router>
            <div>
              <Header branding='Contact Manager'/>
              <div className='container'>
                <Switch>
                  <Route exact path='/' component={Contacts}/>
                  <Route exact path='/about' component={About}/>
                  <Route exact path='/addcontact' component={AddContact}/>
                </Switch>
              </div>
            </div>
          </Router>
        </Provider>
        
      </div>
    );
  }
}

export default App;
