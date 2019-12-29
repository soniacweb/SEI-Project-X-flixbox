import React from 'react'
import { Router } from '@reach/router'
import GlobalStyle from './styles/GlobalStyle'


import Header from './elements/Header'
import Home from './Home'
import Movie from './Movie'
import NotFound from './NotFound'

const App = () => ( 
<div>
  <Header />

  <Router>

      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound  default />

  </Router>

 
  <GlobalStyle />
  </div>
  )
 
export default App;
