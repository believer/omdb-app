import { Router } from '@reach/router'
import React from 'react'
import Search from './pages/Search'
import { SearchProvider } from './context/SearchContext'

const MovieRoute = React.lazy(() => import('./pages/Movie'))

const App = () => (
  <SearchProvider>
    <React.Suspense fallback="">
      <Router>
        <Search path="/" />
        <MovieRoute path="/movie/:id" />
      </Router>
    </React.Suspense>
  </SearchProvider>
)

export default App
