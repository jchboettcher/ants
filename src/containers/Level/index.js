import React, { useEffect, useState } from 'react'
import Sketch from 'react-p5'
// import Scores from './components/Scores'
import {
  // LeaderboardDiv,
  BackgroundDiv, CenterDiv, LevelDiv,
  Paragraph, Title, 
  // LeaderboardHeader,
} from './styles'
import LevelCanvas from './components/LevelCanvas'
import Description from './components/Description'

const Level = ({ level }) => {
  useEffect(() => {
    document.title = `Picnic Ants - Level ${level}`
  }, [])
  // const [win, setWin] = useState(false)
  // let won = false
  // if (win && !won) {
  //   won = true
  //   alert("win")
  // }
  return (
    <CenterDiv>
      <BackgroundDiv>
          <Title>Picnic Ants</Title>
          <Paragraph>
            Picnic Ants is a logic game based largely on <a href="https://en.wikipedia.org/wiki/Langton%27s_ant">Langton's Ant</a>.
            The goal is to get the ants to their picnic without leaving a mess along the way.
            Ants leave and pick up crumbs in squares they visit, and these crumbs help other ants (or themselves) determine
            which directions they should turn. Your job is to set up an initial crumb trail so that
            all the ants get to the picnic without going out of bounds. But remember, don't make a mess! You have to finish
            with no crumbs left on the board.
          </Paragraph>
          <LevelDiv>
            <LevelCanvas level={level} />
            <Description level={level} />
          </LevelDiv>
      </BackgroundDiv>
    </CenterDiv>
    // <BackgroundDiv>
    //   <LeaderboardDiv>
    //     <LeaderboardHeader>Leaderboard</LeaderboardHeader>
    //     <Scores/>
    //   </LeaderboardDiv>
    // </BackgroundDiv>
  )
}

export default Level
