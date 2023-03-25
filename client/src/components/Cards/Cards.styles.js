import styled from "styled-components";

export const CardsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: rgba(16, 18, 27, 0.4);
  border-left: 1px solid rgba(223, 223, 223, 0.45);
  min-height: 100vh;
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
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
  opacity: 0;
  a{
   color: #fff;
   text-decoration: none;
   &:hover {
    color: #969696;
    text-decoration: none;
   }
  }
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
  button{
   border: none;
   background-color: #14162b;
   border-radius: 4px;
   padding: 5px 20px;
   transition: padding 0.3s ease-in-out;
   cursor: pointer;
   &[disabled] {
    background-color: #ccc !important;
    color: #14162b;
    cursor: default;
   }
  }
`

export const PageNumber = styled.button`
  border: none;
  background-color: #14162b;
  border-radius: 4px;
  padding: 5px;
  transition: padding 0.3s ease-in-out;
  cursor: pointer;
`