import styled from 'styled-components';

export const FiltersWrapper = styled.section`
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FiltersContainer = styled.div`
position: relative;
`

export const InputFilter = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #14162b;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  min-width: 200px;
  padding: 10px 5px;
  box-shadow: 0 0 0 1px rgba(113 119 144 / 25%);
  color: #f9fafb;
  transition: all 0.3s ease-in-out;
`

export const ResetBtn = styled.button`
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