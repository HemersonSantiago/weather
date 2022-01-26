import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 18rem;
  border: 1px solid #c8c8c8;
  width: 50%;
  position: absolute;
  bottom: -1rem;
  border-radius: 1.5rem;
  right: 17rem;
  background-color: aliceblue;

  & > div:first-child {
    border-right: 1px solid #c8c8c8;
  }

  @media (max-width: 1268px) {
    width: 100%;
    margin-top: 3rem;
    right: 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 25rem;
    margin-top: 3rem;
    right: 0;
    display: block;
    & > div:first-child {
      border-right: 0px;
      border-bottom:  1px solid #c8c8c8;
      height: 50%;
      margin-bottom: 1rem;
    }
  }
`;

export const GridTem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
    color: darkslategrey;
  :first-child {
    flex-direction: column;
  }
  .temperature {
    margin: 0 0 2rem 2rem;
    font-size: 3rem;
  }
  .hour { 
    font-size: 4rem;
  }
  .day {
    font-size: 1rem;
  }
  .weather-forecast {
    margin-top: 1.5rem;
  }
`