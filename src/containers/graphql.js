import gql from 'graphql-tag'

export const STEPS_BOARD = gql`
  query usersBySteps($level: Int!) {
    usersBySteps(level: $level) {
      id
      name
      level
      steps
      crumbs
      createdAt
    }
  }
`

export const CRUMBS_BOARD = gql`
  query usersByCrumbs($level: Int!) {
    usersByCrumbs(level: $level) {
      id
      name
      level
      steps
      crumbs
      createdAt
    }
  }
`

export const ADD_USER = gql`
  mutation addUser($input: AddUser!) {
    addUser(input: $input) {
      id
      name
      level
      steps
      crumbs
      createdAt
    }
  }
`