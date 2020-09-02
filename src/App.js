import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import CocktailCategoriesContainer from './components/CocktailCategoriesContainer';
import CocktailImagesContainer from './components/CocktailImagesContainer';
import CocktailDetails from './components/CocktailDetails';



function App() {
  return (
    <div className="App">
      <main className='App-main'>
        <Router>
          <Switch>
            <Route
              exact path='/'
              component={CocktailCategoriesContainer}
            />
            <Route
              exact path='/categories/:category+'
              component={CocktailImagesContainer}
            />
            <Route
              exact path='/drinks/:id+' component={CocktailDetails}
            />

          </Switch>
        </Router>

      </main>
    </div>
  );
}

export default App;
