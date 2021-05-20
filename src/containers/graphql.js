import gql from 'graphql-tag'

export const RANKINGS_BY_CRUMBS = gql`
  query usersBy1($game: String!, $level: Int!, $limit: Int!) {
    usersBy1(game: $game, level: $level, limit: $limit) {
      id
      name
      game
      level
      score1
      score2
      createdAt
    }
  }
`

export const RECENT_BY_CRUMBS = gql`
  query recentUsersBy1($game: String!, $level: Int!, $limit: Int!, $time: Int!) {
    usersBy1(game: $game, level: $level, limit: $limit, time: $time) {
      id
      name
      game
      level
      score1
      score2
      createdAt
    }
  }
`

export const RANKINGS_BY_STEPS = gql`
  query usersBy2($game: String!, $level: Int!, $limit: Int!) {
    usersBy1(game: $game, level: $level, limit: $limit) {
      id
      name
      game
      level
      score1
      score2
      createdAt
    }
  }
`

export const RECENT_BY_STEPS = gql`
  query recentUsersBy2($game: String!, $level: Int!, $limit: Int!, $time: Int!) {
    usersBy1(game: $game, level: $level, limit: $limit, time: $time) {
      id
      name
      game
      level
      score1
      score2
      createdAt
    }
  }
`

export const ADD_USER = gql`
  mutation addUser($input: AddUser!) {
    addUser(input: $input) {
      id
      name
      game
      level
      score1
      score2
      createdAt
    }
  }
`