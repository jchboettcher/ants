import styled from 'styled-components'

export const BackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const LevelDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export const HowToDiv = styled.div`
  padding: 5px 0px 30px 30px;
  display: flex;
  flex-direction: column;
`

export const CenterDiv = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 10px;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  font-family: ${({theme}) => theme.fonts.primary.family};
  margin-bottom: 0;
`

export const Subtitle = styled.h3`
  font-weight: bold;
  font-size: 18px;
  font-family: ${({theme}) => theme.fonts.primary.family};
  margin-top: 0;
  margin-bottom: 0;
`

export const Paragraph = styled.p`
  font-family: ${({theme}) => theme.fonts.primary.family};
  font-size: 15px;
`

export const HowToPara = styled.p`
  font-family: ${({theme}) => theme.fonts.primary.family};
  font-size: 15px;
  margin-bottom: 0px;
`

export const EmptyDiv = styled.div`
  height: 25px;
`