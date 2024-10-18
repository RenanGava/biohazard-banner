"use client";
import { useEffect } from "react";
import { Container, IconContainer, Icons } from "./styles";

import { faSyringe, faHeadSideMask } from "@fortawesome/free-solid-svg-icons";

export function Dashboard() {
  useEffect(() => {
    const itensGrid = window.document.querySelectorAll("#grid > div");
    let index = 0;
    let currentIndex = index;

    itensGrid[index].classList.add("focus");

    const interval = setInterval(() => {
      
      itensGrid[currentIndex].classList.remove("focus");

      itensGrid[index].classList.add("focus");

      if(index >= itensGrid.length - 1){

        currentIndex = index
        index = 0
      }
      else{
        
        currentIndex = index++
      }
    }, 3000);
  }, []);

  return (
    <Container>
      <div className="container-main">
        <div>
          <h1>
            Qual a importância dos <span>EPI’s</span> para{" "}
            <span>Farmacêuticos?</span>
          </h1>
          <p>
            Os EPI's previnem acidentes de trabalho e contaminação cruzada,
            protegendo contra agentes nocivos. Seu uso é obrigatório por lei,
            conforme a NR-6, que regula a responsabilidade de empregadores e
            empregados sobre esses equipamentos.
          </p>
          <a href=""> testando</a>
        </div>
        <div id="grid">
          <IconContainer className="">
            <Icons icon={faSyringe} size="2xl" />
          </IconContainer>
          <IconContainer>
            <Icons icon={faHeadSideMask} size="2xl" />
          </IconContainer>
          <IconContainer>
            <Icons icon={faSyringe} size="2xl" />
          </IconContainer>
          <IconContainer>
            <Icons icon={faSyringe} size="2xl" />
          </IconContainer>
          <IconContainer>
            <Icons icon={faSyringe} size="2xl" />
          </IconContainer>
          <IconContainer>
            <Icons icon={faSyringe} size="2xl" />
          </IconContainer>
          <IconContainer>
            <Icons icon={faSyringe} size="2xl" />
          </IconContainer>
          <IconContainer>
            <Icons icon={faSyringe} size="2xl" />
          </IconContainer>
          <IconContainer>
            <Icons icon={faSyringe} size="2xl" />
          </IconContainer>
        </div>
      </div>
    </Container>
  );
}
