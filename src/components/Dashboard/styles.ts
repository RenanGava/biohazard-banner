"use client";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Container = styled.div`
  margin-top: 100px;
  padding: 2rem;
  div.container-main {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;

    display: flex;

    & > div:first-child {
      display: flex;
      flex-direction: column;
      max-width: 600px;
      width: 100%;
      text-align: left;
      padding-right: 1rem;

      span {
        color: var(--linear1);
        font-weight: 700;
        text-decoration: underline;
      }
    }

    & > div:last-child {

      div.iconFrame1{
        grid-area: iconFrame1;
      }

      div.iconFrame2{
        grid-area: iconFrame2;
      }

      div.iconFrame3{
        grid-area: iconFrame3;
      }

      div.iconFrame4{
        grid-area: iconFrame4;
      }

      div.iconFrame5{
        grid-area: iconFrame5;
      }

      display: grid;
      /* grid-template-columns: 1fr 1fr 1fr; */
      grid-template-areas:
        "iconFrame1 . iconFrame2"
        ". iconFrame3 . "
        "iconFrame4 . iconFrame5"
		;
      grid-gap: 30px;
      margin: 0 auto;
      
    }

    @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;

      & > div:first-child {
      
      max-width: 400px;
      width: 100%;
      margin: 0rem auto 2rem auto;
      /* text-align: left; */
      padding-right: 1rem;

      h1{
        text-align: left;
      }

      p{
        text-align: justify;
      }

      span {
        color: var(--linear1);
        font-weight: 700;
        text-decoration: underline;
      }
    }

      & > div:last-child {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
      }
    }
  }
`;

export const IconContainer = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px gray;
  border-radius: 10px;

  &.focus {
    transition: 1000ms;
    scale: 1.1;
  }
`;

export const Icons = styled(FontAwesomeIcon)``;

export const ItemImage = styled(Image)``;
