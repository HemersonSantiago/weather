import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  position: relative;
  @media (max-width: 768px) {
    min-height: 40rem;
  }
`;

export const WrapperSearch = styled.div`
  display: flex;
  margin-top: 5rem;
  @media (max-width: 1268px) {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  } 
`;

export const Input = styled.input`
  width: 20rem;
  height: 3rem;
  border-radius: 0.4rem;
  border: 1px solid;
  font-size: 2rem;
  margin-right: 1rem;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const Button = styled.button`
  border: 0.15rem solid #fff;
  width: 12rem;
  height: 3rem;
  border-radius: 0.3rem;
  background: #3b5bb3;
  color: #fff;
  font-weight: 800;
  cursor: pointer;
  box-sizing: border-box;
  :hover {
    box-shadow: 0 0 6px rgb(35 173 255);
    opacity: 0.9;
  }
`;
