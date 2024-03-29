import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;

  button {
    width: 300px;
    padding: 15px;
    background-color: white;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      background-color: #1f1d1d;
      color: white;
      transition: 0.3s;
    }
  }
`;
