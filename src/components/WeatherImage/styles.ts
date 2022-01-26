import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1268px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const MobileImg = styled.img`
  display: none;
  border-radius: 1.5rem;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const Img = styled.img`
  border-radius: 1.5rem;
  height: 83%;

  @media (max-width: 1268px) {
    display: block;
    width: 100%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Temp = styled.p`
  position: absolute;
  left: 0;
  font-size: 3rem;
  color: #fff;
  left: 3rem;
  top: 3rem;
`;