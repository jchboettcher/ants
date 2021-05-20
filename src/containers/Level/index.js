import React, { useEffect } from 'react'
import {
  BackgroundDiv, CenterDiv, LevelDiv, HowToPara,
  Paragraph, Title, Subtitle, HowToDiv, EmptyDiv
} from './styles'
import LevelCanvas from './components/LevelCanvas'
import Description from './components/Description'

const Level = ({ level }) => {
  useEffect(() => {
    document.title = `Picnic Ants - Level ${level}`
  }, [])
  return (
    <CenterDiv>
      <BackgroundDiv>
          <Title>Picnic Ants</Title>
          <Subtitle style={{fontStyle: 'italic', fontWeight: 'normal'}}>
            Logic game by Jack Boettcher
            (<a href="https://github.com/jchboettcher/ants">source code</a>)
          </Subtitle>
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
            <HowToDiv>
              <Description level={level} />
              <EmptyDiv style={{height: '40px'}}/>
              <Subtitle>To be implemented:</Subtitle>
              <HowToPara>1. Leaderboard for challenge levels-- already have a backend and database set up.</HowToPara>
              <HowToPara>2. Sandbox-- a playground testing environment.</HowToPara>
              <HowToPara>3. Reverse mode-- given crumbs, place ants to clean them up.</HowToPara>
              <HowToPara>4. More levels!</HowToPara>
            </HowToDiv>
          </LevelDiv>
      </BackgroundDiv>
    </CenterDiv>
  )
}

export default Level
