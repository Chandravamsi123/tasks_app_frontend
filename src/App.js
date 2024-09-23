import React from 'react'
import {Route,Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import TaskForm from './components/TaskForm'
import Home from './components/Home'
import "./App.css"

const App = () => (
    <div>
      <Navbar/>
      <hr className='hor-line'/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/createTask" component={TaskForm}/>
      </Switch>
    </div>
  )


export default App
