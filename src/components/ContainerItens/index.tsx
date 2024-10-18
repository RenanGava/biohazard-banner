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
          <h1>Aventais/Jalecos</h1>
          <p>
            recomenda-se o uso desses itens de vestimenta impermeáveis para
            proteger o corpo contra derramamentos, respingos e poeira,
            prevenindo contaminações.
          </p>
          <span>...</span>
        </ItemCard>
        <ItemCard>
          <ImageContainer>
            <ItemImage src={luva} alt="" width={64} height={64} />
          </ImageContainer>
          <h1>Aventais/Jalecos</h1>
          <p>
            recomenda-se o uso desses itens de vestimenta impermeáveis para
            proteger o corpo contra derramamentos, respingos e poeira,
            prevenindo contaminações.
          </p>
          <span>...</span>
        </ItemCard>
        <ItemCard>
          <ImageContainer>
            <ItemImage src={macacao} alt="" width={64} height={64} />
          </ImageContainer>
          <h1>Aventais/Jalecos</h1>
          <p>
            recomenda-se o uso desses itens de vestimenta impermeáveis para
            proteger o corpo contra derramamentos, respingos e poeira,
            prevenindo contaminações.
          </p>
          <span>...</span>
        </ItemCard>
        <ItemCard>
          <ImageContainer>
            <ItemImage src={mascara} alt="" width={64} height={64} />
          </ImageContainer>
          <h1>Aventais/Jalecos</h1>
          <p>
            recomenda-se o uso desses itens de vestimenta impermeáveis para
            proteger o corpo contra derramamentos, respingos e poeira,
            prevenindo contaminações.
          </p>
          <span>...</span>
        </ItemCard>
        <ItemCard>
          <ImageContainer>
            <ItemImage src={viseira} alt="" width={64} height={64} />
          </ImageContainer>
          <h1>Aventais/Jalecos</h1>
          <p>
            recomenda-se o uso desses itens de vestimenta impermeáveis para
            proteger o corpo contra derramamentos, respingos e poeira,
            prevenindo contaminações.
          </p>
          <span>...</span>
        </ItemCard>
      </ItensWrapper>
    </Container>
  );
}
