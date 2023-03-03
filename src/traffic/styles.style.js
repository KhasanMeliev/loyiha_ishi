import styled, { keyframes } from "styled-components";

const red = keyframes`
 from{
 }
 to{
      opacity: 2;
      box-shadow: red 0px 0px 10px;
 }
`;
const yellow = keyframes`
 from{
 }
 to{
      opacity: 2;
      box-shadow: yellow 0px 0px 10px;
 }
`;

const green = keyframes`
 from{
 }
 to{
      opacity: 2;
      box-shadow: #00ff0d 0px 0px 10px;
 }
`;
export const Container = styled.div`
  width: 100%;
  background-color: #42d4f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  padding: 25px 0px;
`;
export const TrafficLight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Box = styled.div`
  width: 100px;
  height: 280px;
  background-color: #1e2121;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 17px;

  div {
    width: 60px;
    height: 60px;
    background-color: red;
    border-radius: 50%;
    opacity: 0.3;

    &:first-child {
      animation: ${red} 3s 4s;
    }
    &:nth-child(2) {
      background-color: yellow;
      animation: ${yellow} 3s 7s;
    }
    &:nth-child(3) {
      background-color: green;
      animation: ${green} 4s 0s;
    }
  }
`;

export const Stick = styled.div`
  width: 55px;
  height: 300px;
  background-color: #1e2121;
`;

export const Rules = styled.div`
  width: 90%;
  height: 360px;
  background-color: #1e2121;

  p {
    width: 230px;
    color: white;
    font-family: cursive;
    font-size: 15px;
  }
`;

export const Red = styled.div`
  width: 100%;
  height: 120px;
  background-color: #1e2121;
  display: flex;
  align-items: center;
  gap: 10px;

  div {
    width: 60px;
    height: 60px;
    background-color: red;
    border-radius: 50%;
    margin-left: 20px;
  }
`;
export const Green = styled.div`
  width: 100%;
  height: 120px;
  background-color: #1e2121;
  display: flex;
  align-items: center;
  gap: 10px;

  div {
    width: 60px;
    height: 60px;
    background-color: green;
    border-radius: 50%;
    margin-left: 20px;
  }
`;

export const Yellow = styled.div`
  width: 100%;
  height: 120px;
  background-color: #1e2121;
  display: flex;
  align-items: center;
  gap: 10px;

  div {
    width: 60px;
    height: 60px;
    background-color: yellow;
    border-radius: 50%;
    margin-left: 20px;
  }
`;
