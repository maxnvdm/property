import React, {Component} from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/authentication/SignIn'
import SignUp from './components/authentication/SignUp'
import Contact from './components/projects/Contact'

class  App extends Component {
  render(){
    return (
     <BrowserRouter>  
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/project/:id' component={ProjectDetails}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
