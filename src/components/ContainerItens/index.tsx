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

export function ContainerItens() {
  return (
    <Container>
      <ContentHeader>
        <h1>
          Quais são os <span>EPI’s</span> para Farmacêuticos{" "}
          <span>indispensáveis?</span>
        </h1>
      </ContentHeader>
      <ItensWrapper>
        <ItemCard>
          <ImageContainer>
            <ItemImage src={jaleco} alt="" width={64} height={64} />
          </ImageContainer>
          <h1>Jalecos</h1>
          <p>
            Recomenda-se o uso de jalecos para proteger o corpo contra
            derramamentos, respingos e poeira, prevenindo contaminações de
            agentes quimicos leves.
          </p>
          <span>Ler Mais!</span>
        </ItemCard>
        <ItemCard>
          <ImageContainer>
            <ItemImage src={luva} alt="" width={64} height={64} />
          </ImageContainer>
          <h1>Luvas descartáveis</h1>
          <p>
            As mãos são as principais ferramentas de trabalho do farmacêutico. O
            uso de luvas é essencial para evitar o contato direto com possíveis
            contaminantes e assegurar a higiene durante a manipulação de
            medicamentos.
          </p>
          <span>Ler Mais!</span>
        </ItemCard>
        <ItemCard>
          <ImageContainer>
            <ItemImage src={viseira} alt="" width={64} height={64} />
          </ImageContainer>
          <h1>Óculos de segurança</h1>
          <p>
            Os óculos de proteção visam resguardar os olhos contra respingos,
            poeira e outros agentes que podem causar irritações e lesões
            oculares durante o trabalho.
          </p>
          <span>Ler Mais!</span>
        </ItemCard>
        <ItemCard>
          <ImageContainer>
            <ItemImage src={mascara} alt="" width={64} height={64} />
          </ImageContainer>
          <h1>Máscaras de proteção</h1>
          <p>
            As máscaras protegem as vias respiratórias, prevenindo doenças e
            alergias, e bloqueiam a transmissão de microrganismos entre
            farmacêutico e paciente.
          </p>
          <span>Ler Mais!</span>
        </ItemCard>
        <ItemCard>
          <ImageContainer>
            <ItemImage src={macacao} alt="" width={64} height={64} />
          </ImageContainer>
          <h1>Aventais/Jalecos</h1>
          <p>
            O macacão na área farmacêutica protege contra contaminações pesadas,
            como substâncias químicas e biológicas, garantindo a segurança dos
            profissionais.
          </p>
          <span>Ler Mais</span>
        </ItemCard>
      </ItensWrapper>
    </Container>
  );
}
