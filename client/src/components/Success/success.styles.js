import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const glitchLoop1 = keyframes`
  0% {
   clip: rect(36px, 9999px, 9px, 0);
 }

 25% {
   clip: rect(25px, 9999px, 99px, 0);
 }

 50% {
   clip: rect(50px, 9999px, 102px, 0);
 }

 75% {
   clip: rect(30px, 9999px, 92px, 0);
 }

 100% {
   clip: rect(91px, 9999px, 98px, 0);
 }
`

const glitchLoop2 = keyframes`
0% {
   top: -1px;
   left: 1px;
   clip: rect(65px, 9999px, 119px, 0);
 }

 25% {
   top: -6px;
   left: 4px;
   clip: rect(79px, 9999px, 19px, 0);
 }

 50% {
   top: -3px;
   left: 2px;
   clip: rect(68px, 9999px, 11px, 0);
 }

 75% {
   top: 0px;
   left: -4px;
   clip: rect(95px, 9999px, 53px, 0);
 }

 100% {
   top: -1px;
   left: -1px;
   clip: rect(31px, 9999px, 149px, 0);
 }
`

export const SuccessWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 75px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(16, 18, 27, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  animation: ${fadeIn} 6s cubic-bezier(0.25, 1, 0.3, 1) both;
`

export const SuccessLogo = styled.img`
  width: 400px;
  height: auto;
`

export const SuccessTitle = styled.h1`
  font-size: 4rem;
  max-width: 800px;
  position: relative;
  color: white;
  mix-blend-mode: lighten;
  &:before,
  &:after {
   position: absolute;
   top: 0;
   content: 'Your game has been added to our Database.';
   width: 100%;
   background-color: transparent;
   clip: rect(0, 0, 0, 0);
  }
  &:before {
   left: -1px;
   text-shadow: 1px 0 rgba(red, 0.7);
   animation: ${glitchLoop1} 0.8s infinite ease-in-out alternate-reverse;
  }
  &:after {
   left: 1px;
   text-shadow: -1px 0 rgba(blue, 0.7);
   animation: ${glitchLoop2} 0.8s infinite ease-in-out alternate-reverse;
}
`

export const MainBtn = styled.button`
  border: none;
  background-color: #14162b;
  border-radius: 4px;
  padding: 10px 5px;
  transition: padding 0.3s ease-in-out;
  margin-top: 30px;
  min-width: 200px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover{
   transform: scale(1.05);
  }
`





// @keyframes glitch-loop-1 {
//  0% {
//    clip: rect(36px, 9999px, 9px, 0);
//  }

//  25% {
//    clip: rect(25px, 9999px, 99px, 0);
//  }

//  50% {
//    clip: rect(50px, 9999px, 102px, 0);
//  }

//  75% {
//    clip: rect(30px, 9999px, 92px, 0);
//  }

//  100% {
//    clip: rect(91px, 9999px, 98px, 0);
//  }
// }

// @keyframes glitch-loop-2 {
//  0% {
//    top: -1px;
//    left: 1px;
//    clip: rect(65px, 9999px, 119px, 0);
//  }

//  25% {
//    top: -6px;
//    left: 4px;
//    clip: rect(79px, 9999px, 19px, 0);
//  }

//  50% {
//    top: -3px;
//    left: 2px;
//    clip: rect(68px, 9999px, 11px, 0);
//  }

//  75% {
//    top: 0px;
//    left: -4px;
//    clip: rect(95px, 9999px, 53px, 0);
//  }

//  100% {
//    top: -1px;
//    left: -1px;
//    clip: rect(31px, 9999px, 149px, 0);
//  }
// }
