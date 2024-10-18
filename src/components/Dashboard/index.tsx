"use client";
import { useEffect } from "react";
import { Container, IconContainer, Icons, ItemImage } from "./styles";

import { faSyringe, faHeadSideMask } from "@fortawesome/free-solid-svg-icons";

import jaleco from "../../assets/jaleco.png";
import luva from "../../assets/luva.png";
import macacao from "../../assets/macacao.png";
import mascara from "../../assets/mascara-facial.png";
import viseira from "../../assets/equipamentos-de-protecao.png";
import seringa from "../../assets/seringa.png";

export function Dashboard() {
  useEffect(() => {
    const itensGrid = window.document.querySelectorAll("#grid > div");
    let index = 0;
    let currentIndex = index;

    itensGrid[index].classList.add("focus");

    const interval = setInterval(() => {
      itensGrid[currentIndex].classList.remove("focus");

      itensGrid[index].classList.add("focus");

      if (index >= itensGrid.length - 1) {
        currentIndex = index;
        index = 0;
      } else {
        currentIndex = index++;
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
          <IconContainer className="iconFrame1">
            <ItemImage src={jaleco} alt="" width={64} height={64} />
          </IconContainer>
          <IconContainer className="iconFrame2">
            <ItemImage src={luva} alt="" width={64} height={64} />
          </IconContainer>
          <IconContainer className="iconFrame3">
            <ItemImage src={mascara} alt="" width={64} height={64} />
          </IconContainer>
          <IconContainer className="iconFrame4">
            <ItemImage src={viseira} alt="" width={64} height={64} />
          </IconContainer>
          <IconContainer className="iconFrame5">
            <ItemImage src={macacao} alt="" width={64} height={64} />
          </IconContainer>
        </div>
      </div>
    </Container>
  );
}
