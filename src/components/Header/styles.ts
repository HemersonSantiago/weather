import styled from "styled-components";

export const Container = styled.div`
position: relative;
  text-align: center;
  margin-bottom: 3rem;


  @media (max-width: 1460px) {
    position: static;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const Info = styled.p`
  color: #fff;
  font-size: 1.5rem;
`;

export const WrapperInfo = styled.div`
  width: 100%;
`;
export const WrapperButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 1460px) {
    position: static;
    margin-top: 2rem;
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
  :hover {
    box-shadow: 0 0 6px rgb(35 173 255);
    opacity: 0.9;
  }
`;
