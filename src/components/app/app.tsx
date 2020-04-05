import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.scss';
import Shortener from '../shortener/shortener';
import Redirect from '../redirect/redirect';

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        
        <Switch>
          <Route path='/' exact>
            <Shortener></Shortener>
          </Route>
          <Route path='/:id'>
            <Redirect></Redirect>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;