import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

export const Box = styled.div`
  width: 350px;
  height: 150px;
  background-color: white;
`;

export const Texts = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  h1 {
    font-size: 30px;
    margin-top: 20px;
  }
  p {
    font-size: 30px;
    font-weight: 500;
    margin: 5px;
    margin-top: 20px;
  }

  h2 {
    margin-top: 20px;
    color: yellow;
    font-size: 28px;
  }
  b {
    color: white;
  }
`;

export const SolveProblem = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  h1 {
    font-size: 30px;
    color: white;
  }
  input {
    height: 50px;
    font-size: 25px;
  }

  button {
    height: 50px;
    font-size: 22px;
  }

  p {
    color: white;
    font-size: 30px;
    font-weight: bold;
  }
`;
