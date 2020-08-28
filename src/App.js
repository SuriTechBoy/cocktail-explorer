import React from 'react';
import './App.css';
import CocktailCategoriesContainer from './components/CocktailCategoriesContainer';
import { Route } from 'react-router-dom'
import CocktailImages from './components/CocktailImages';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Route exact path='/' component={CocktailCategoriesContainer} />
        <Route path='/cocktails/:category' component={CocktailImages} />
      </main>
    </div>
  );
}

export default App;
