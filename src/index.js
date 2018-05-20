import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import RecipeIndex from './recipe-index'
import RecipeBook from './recipe-book'
import Recipe from './recipe'

var model = new RecipeBook('')

const getRecipe = ({ match }) => {
  var recipe = model.getRecipeById(match.params.id)
  if (typeof recipe !== 'undefined') {
    return <Recipe recipe={recipe} />
  }
  return <p>not found</p>
}

const App = () => (
  <Router>
    <div>
      <RecipeIndex model={model} />

      <Route path='/:id' component={getRecipe} />
    </div>
  </Router>
)

var render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
}

model.subscribe(render)
render()
