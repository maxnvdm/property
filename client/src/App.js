import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/authentication/SignIn'
import SignUp from './components/authentication/SignUp'
import Contact from './components/projects/Contact'
import Viewbell from './components/projects/Viewbell'
import Commercial from './components/projects/Commercial'
import ListPrivately from './components/projects/ListPrivately'

import { Provider } from "react-redux";
import store from "./store"; 
class  App extends Component {

  render(){
    return (
    <Provider store={store}>
     <BrowserRouter>  
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/projectdetails/:id' component={ProjectDetails}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/viewbell' component={Viewbell}/>
            <Route path='/commercial' component={Commercial}/>
            <Route path='/projectdetails' component={ProjectDetails}/>
            <Route path='/listprivately' component={ListPrivately}/>
          </Switch>
        </div>

      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
