import gql from 'graphql-tag'

export const ALL_USERS = gql`
  query allUsers {
    allUsers {
      id
      displayName
      score
      updatedAt
    }
  }
`

export const GET_USER = gql`
  query userByName($name: String!, $password: String!) {
    userByName(displayName: $name, password: $password) {
      id
      displayName
      rank
      score
    }
  }
`

// export const CHECK_PASS = gql`
//   query checkPass($name: String!, $password: String!) {
//     checkPass(displayName: $name, password: $password) {
//       id
//       displayName
//       rank
//       score
//     }
//   }
// `

export const ADD_USER = gql`
  mutation addUser($input: AddUser!) {
    addUser(input: $input) {
      id
      displayName
      rank
      score
    }
  }
`

export const UPDATE_SCORE = gql`
  mutation updateScore($id: ID!, $score: Int!) {
    updateScore(id: $id, newScore: $score) {
      id
      displayName
      score
      rank
    }
  }
`
