import React,{Component} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from './config/routes'

import '../src/components/css/index.less'
export default class App extends Component{

  render(){
    return (

     <Router>
       <Switch>
       {
          routes.map((route) =>{
            return <Route {...route}  Key={route.path}/>    
          })
        }
       </Switch>
       

     </Router>
    )
  }
}