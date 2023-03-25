import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
export const AddGameContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: rgba(16, 18, 27, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  animation: ${fadeIn} 6s cubic-bezier(0.25, 1, 0.3, 1) both;
  padding: 0 50px;
  justify-content: center;
  padding: 50px;
`

export const AddGameFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`

export const AddGameForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 50px;
  input,
  textarea {
   padding: 8px 20px;
  border: none;
  background-color: #14162b;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 0 0 1px rgba(113 119 144 / 25%);
  color: #f9fafb;
  }
  input:focus:not(:focus-visible),
  textarea:focus-visible {
   outline: none;
 }
`

export const SelectorsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px;
  border: none;
  background-color: #14162b;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 0 0 1px rgba(113 119 144 / 25%);
  color: #f9fafb;
`

export const SelectorsItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`

export const SentBtn = styled.button`
   box-sizing: border-box;
  border: none;
  background-color: #14162b;
  border-radius: 4px;
  padding: 10px 20px;
  transition: scale 0.3s ease-in-out;
  cursor: pointer;
  &:disabled{
   background-color: #ccc !important;
   color: #14162b;
   cursor: default;
  }
  &:enabled:hover{
   scale: 1.03;
  }
`




