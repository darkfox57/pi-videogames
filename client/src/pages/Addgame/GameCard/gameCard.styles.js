import styled from "styled-components";

export const GameCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AddGameCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.2px);
  -webkit-backdrop-filter: blur(9.2px);
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 45px;
  animation: fade-in 6s cubic-bezier(0.25, 1, 0.3, 1) both;
  max-width: 400px;
`

export const ImageContainer = styled.figure`
  max-height: 300px;
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
`

export const CardImg = styled.img`
  height: 300px;
  object-fit: cover;
`

export const ImageCaption = styled.figcaption`
  position: absolute;
  z-index: 20;
  bottom: 0;
  right: 0;
  background-color: #000;
  padding: 8px;
  display: flex;
  gap: 5px;
`
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 20px 0 20px;
  align-items: center;
  h2 {
   margin: 0;
   font-size: 1.2rem;
   font-weight: 300;
  }
  p {
   margin: 0;
  }
`

export const Genres = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
   margin: 0;
  }
`

export const GenreList = styled.div`
   display: flex;
  gap: 10px;
  flex-direction: row;
  place-content: center center;
  flex-wrap: wrap;
  max-width: 400px;
  span:not(:first-child)::before {
  content: '| ';
}
`