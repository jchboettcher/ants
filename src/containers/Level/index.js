import React, { useEffect } from 'react'
// import Scores from './components/Scores'
// import {
//   LeaderboardDiv,
//   BackgroundDiv,
//   LeaderboardHeader,
// } from './styles'

const Home = ({ level }) => {
  useEffect(() => {
    document.title = `Level ${level}`
  }, [])
  return (
    <div>{`Hello world... ${level}`}</div>
    // <BackgroundDiv>
    //   <LeaderboardDiv>
    //     <LeaderboardHeader>Leaderboard</LeaderboardHeader>
    //     <Scores/>
    //   </LeaderboardDiv>
    // </BackgroundDiv>
  )
}

export default Home
