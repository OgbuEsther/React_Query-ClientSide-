import React from "react";
import styled from "styled-components";

const YupTest = () => {
  return (
    <div>
      <Container>
        <input type="text" placeholder="Enter your name" />
        <br />
        <input type="text" placeholder="Enter your age" />
        <br />
        <input type="text" placeholder="Enter your email" />
        <br />
        <input type="text" placeholder="Enter your password" />
        <br />
        <input type="text" placeholder="Enter your confirm password" />
      </Container>
      <button>login</button>
    </div>
  );
};

export default YupTest;

const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #f1f1;

  input {
    width: 300px;
    height: 30px;
    border-radius: 2px;
    border: 0.1px solid black;
    outline: none;
    background-color: transparent;
  }
`;
