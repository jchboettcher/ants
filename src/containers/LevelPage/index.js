import React from 'react'
import Level from '../Level'
import { useParams } from 'react-router-dom'

const LevelPage = () => {
  const { level } = useParams()
  return (
    <Level level={level}></Level>
  )
}

export default LevelPage
