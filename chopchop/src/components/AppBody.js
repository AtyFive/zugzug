import React from 'react';
import Gamezz from './Gamezz';
import SpaceStory from './SpaceStory';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Team from './Team';

export default function AppBody() {
 
  return (
    <div className = 'app__mid'>
      <Switch>
      <Route path='/' component={Home} exact/>
        <Route path='/home' component={Home}/>
        <Route path='/team' component={Team}/>
        <Route path='/games' component={Gamezz}/>
        <Route path='/space' component={SpaceStory}/>
    </Switch>
    </div>
  );
}

//cut it