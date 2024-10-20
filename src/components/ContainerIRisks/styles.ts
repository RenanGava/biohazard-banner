import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 1rem;
  margin: 5rem auto 0 auto;
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
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const ItemCard = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 900px;
  height: fit-content;
  margin-top: 1rem;
  display: flex;

  div {
    margin-left: 2rem;
    h1 {
      display: block;
      font-size: 20px;
    }

    p {
      width: 100%;
      /* height: 40px; */
      
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
