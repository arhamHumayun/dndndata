import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About'
import DicePage from './components/DicePage';
import SplashScreen from './components/SplashScreen';

const Main = () => (
    <main style={{height: '100%'}} >
        <Switch>
            <Route exact path ='/' component={SplashScreen}/>
            <Route exact path ='/dice' component={DicePage}/>
            <Route exact path ='/about' component={About}/>

        </Switch>
    </main>
)

export default Main;