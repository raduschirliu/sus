import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './app.module.scss';
import Shortener from '../shortener/shortener';

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        
        <Switch>
          <Route path='/:id'>
            <h2>Something else</h2>
          </Route>
          <Route path='/' exact>
            <Shortener></Shortener>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;