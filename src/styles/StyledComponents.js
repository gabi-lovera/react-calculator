import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 400px;
  margin: 30px auto;
  padding-top: 5px;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
  background-color: #3e8e70;
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  padding: 16px;
  display: flex;
  margin: 10px 10px 20px;
  flex-direction: column;
  align-items: flex-end;
  background-color: #363636;
  border-radius: 32px;
  text-align: right;
  justify-content: space-between;
  word-break: break-all;
  box-shadow: 0px 0px 0px 10px #00000033;
`;

export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;
export const Current = styled.div`
  color: white;
  font-size: 2.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 5px;
  padding: 0;
  border-radius: 32px;
  font-size: 1.5em;
  border: none;
  background-color: #00916e;
  box-shadow: 5px 5px 10px -3px #00000040, -5px -5px 15px 3px #00ffc11f;
  &:active {
    background-color: #006f54;
  }

  &:focus {
    outline: none;
  }

  ${({ gridSpan }) => gridSpan && `grid-column: span ${gridSpan};`}
  ${({ operation }) =>
    operation &&
    `background-color: #fcbf49; &:active {
    background-color: #daa133;
  }`}
    ${({ control }) =>
    control &&
    `background-color: #dc3546; &:active {
      background-color: #c40c1f;
    }`} 
    ${({ equals }) =>
    equals &&
    ` background-color: #fcbf49; &:active {
      background-color: #daa133;
    }`}
    ${({ period }) =>
    period &&
    ` background-color: skyblue; &:active {
      background-color: #7cc1dd;
    }`}
`;

export const Image = styled.img`
  margin: 5px;
  width: 40px;
  &:hover {
    transform: scale(1.1);
  }
`;
