import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import Leaderboard from './containers/Leaderboard'
import Submit from './containers/Submit'

const App = () => (
  <Router basename="/ants">
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route path="/submit" component={Submit} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
