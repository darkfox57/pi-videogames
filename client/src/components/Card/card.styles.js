import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px) translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
`

export const CardContainer = styled.div`
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
 max-width: 300px;
 animation: ${FadeIn} 3s cubic-bezier(.25, 1, .30, 1) both ${(props) => props.index * 200}ms;
 a{
  text-decoration: none;
  color: #fff;
  &:hover {
  text-decoration: none;
 color: #969696;
 }
 }
`

export const ImageContainer = styled.figure`
  max-height: 300px;
  display: flex;
  padding: 0;
  margin: 0;
  position: relative;
`

export const CardImage = styled.img`
  height: 300px;
  object-fit: cover;
`

export const CaptionImg = styled.figcaption`
  position: absolute;
  z-index: 20;
  bottom: 0;
  right: 0;
  background-color: #000;
  padding: 8px;
  display: flex;
  gap: 5px;
`

export const CardContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 20px 0 20px;
  h2 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 300;
  }
`

export const CardContentGenres = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  place-content: center center;
  flex-wrap: wrap;
  span:not(:first-child)::before {
  content: '| ';
}
`

export const CardContentStores = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  span {
  width: 16%;
}
`