import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 1rem;
  margin: 0 auto;
`;

export const ContentHeader = styled.header`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;

  span {
    color: var(--linear1);
    text-decoration: underline;
  }
`;

export const ItensWrapper = styled.div`
  margin-top: 50px;
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const ItemCard = styled.div`
  padding: 1rem;
  width: 250px;
  height: 250px;
  margin-top: 2rem;
  justify-content: space-evenly;
  align-items: center;
  transition: 400ms;

  h1 {
    display: block;
    font-size: 20px;
    text-align: center;
  }

  p {
    text-align: center;
    height: 40px;
    overflow: hidden;
  }
  span {
    display: block;
    text-align: center;
    margin: 0 auto;
    letter-spacing: -2px;
  }

  & {
    margin: 1rem;
  }

  &:hover {
    p {
      transition: 400ms;
      height: 100px;
      overflow: block;
    }

    span {
      display: none;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 6.24rem;
  height: 6.24rem;
  border-radius: 10px;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ItemImage = styled(Image)``;
