import React from 'react'
import { RankTd, NameTd, PuzzTd, TimeTd } from '../styles'

const Description = ({
  index, displayName, score, updatedAt,
}) => {
  const mill_to_date = str => {
    const date = new Date(parseInt(str))
    return date.toLocaleString("en-US", {timeZone: 'EST'})
  }
  return (
    <tr>
      <RankTd>{`${index + 1}`}</RankTd>
      <NameTd>{`${displayName}`}</NameTd>
      <PuzzTd>{`${score}`}</PuzzTd>
      <TimeTd>{`${mill_to_date(updatedAt) + ' EST'}`}</TimeTd>
    </tr>
  )
}

export default Description