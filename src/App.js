import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import CreateProject from './pages/CreateProject/CreateProject';
import indexCyberBugs from './pages/ProjectDetail/indexCyberBugs';
import ProjectManagement from './pages/ProjectManagement/ProjectManagement';

import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';
import LoginCyberBugs from './pages/LoginCyberBugs/LoginCyberBugs';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { CyberbugsTemplate } from './templates/HomeTemplate/CyberbugsTemplate';
import DrawerCyberBugs from './HOC/DrawerCyberBugs';
import React, { Component } from 'react';
function App() {
  return (

    <div>
      <LoadingComponent />
      <DrawerCyberBugs />
      <Switch >
        <HomeTemplate path="/home" exact Component={Home} />

        <CyberbugsTemplate exact path='/createproject' Component={CreateProject} />
        <UserLoginTemplate exact path='/login' Component={LoginCyberBugs} />
        <CyberbugsTemplate exact path='/cyberbugs' Component={indexCyberBugs} />
        <CyberbugsTemplate exact path='/projectmanagement' Component={ProjectManagement} />
        <CyberbugsTemplate exact path='/projectdetail/:projectId' Component={indexCyberBugs} />
      </Switch >

    </div>

  );
}

export default App;
