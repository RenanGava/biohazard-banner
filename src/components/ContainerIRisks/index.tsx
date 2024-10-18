"use client";

import {
  Container,
  ContentHeader,
  ImageContainer,
  ItemCard,
  ItemImage,
  ItensWrapper,
} from "./styles";
import jaleco from "../../assets/jaleco.png";
import luva from "../../assets/luva.png";
import macacao from "../../assets/macacao.png";
import mascara from "../../assets/mascara-facial.png";
import viseira from "../../assets/equipamentos-de-protecao.png";
import seringa from "../../assets/seringa.png";

export function ContainerRisks() {
  return (
    <Container>
      <ContentHeader>
        <h1>
          Quais são os <span>principais riscos</span> que estão presentes nas
          atividades dos <span>Farmacêuticos?</span>
        </h1>
      </ContentHeader>
      <ItensWrapper>
        <ItemCard>
          <ImageContainer>
            <ItemImage src={jaleco} alt="" width={64} height={64} />
          </ImageContainer>
          <div>
            <h1>Exposição a Substâncias Químicas</h1>
            <p>
              Os farmacêuticos lidam frequentemente com substâncias químicas,
              como medicamentos controlados e produtos químicos utilizados na
              produção de fórmulas magistrais. Essa exposição pode causar
              intoxicações, alergias e até doenças graves.
            </p>
          </div>
        </ItemCard>
        <ItemCard>
          <ImageContainer>
            <ItemImage src={luva} alt="" width={64} height={64} />
          </ImageContainer>
          <div>
            <h1>Contaminação Microbiológica</h1>
            <p>
              A manipulação de medicamentos e o contato com pacientes aumentam o
              risco de contaminação microbiológica. Bactérias, vírus e fungos
              podem ser transmitidos através do contato direto com os pacientes
              ou por meio de superfícies contaminadas.
            </p>
          </div>
        </ItemCard>
        <ItemCard>
          <ImageContainer>
            <ItemImage src={viseira} alt="" width={64} height={64} />
          </ImageContainer>
          <div>
            <h1>Lesões por Perfurocortantes</h1>
            <p>
              Agulhas, lâminas e outros objetos pontiagudos são usados
              diariamente por farmacêuticos. Acidentes com esses objetos podem
              resultar em cortes, perfurações e a possibilidade de contaminação
              por patógenos.
            </p>
          </div>
        </ItemCard>
      </ItensWrapper>
    </Container>
  );
}
