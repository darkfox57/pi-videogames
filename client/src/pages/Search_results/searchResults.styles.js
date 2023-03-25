import styled from "styled-components";

export const CardsContainer = styled.div`
  display: grid;
  min-height: calc(100vh - 75px);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 50px 50px;
  background-color: rgba(16, 18, 27, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`

