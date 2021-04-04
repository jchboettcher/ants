import React, { useEffect } from 'react'
import Sketch from 'react-p5'
// import Scores from './components/Scores'
import {
  // LeaderboardDiv,
  BackgroundDiv,
  // LeaderboardHeader,
} from './styles'
import LevelCanvas from './components/LevelCanvas'

const Level = ({ level }) => {
  useEffect(() => {
    document.title = `Ants - Level ${level}`
  }, [])
  return (
    <BackgroundDiv>
      <LevelCanvas level={level} />
    </BackgroundDiv>
    // <BackgroundDiv>
    //   <LeaderboardDiv>
    //     <LeaderboardHeader>Leaderboard</LeaderboardHeader>
    //     <Scores/>
    //   </LeaderboardDiv>
    // </BackgroundDiv>
  )
}

export default Level
