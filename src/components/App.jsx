import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import RecipePage from './RecipePage';

function App() {
  return (
    <Router>
      <div>
        {/* <HeaderBar /> */}
        <Route name="home" exact path="/" component={HomePage} />
        <Route name="recipe" path="/recipe/" component={RecipePage} />
      </div>
    </Router>
  );
}

export default App;
