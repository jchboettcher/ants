import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import HomePage from './containers/HomePage'
import LevelPage from './containers/LevelPage'

const numLevels = 10

const App = () => (
  <Router basename="/ants">
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route
              exact path={`/:level(${[...Array(numLevels + 1).keys()].join("|").substring(2)})`}
              component={LevelPage}
            />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
