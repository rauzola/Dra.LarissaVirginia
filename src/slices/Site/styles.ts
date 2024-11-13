// styles.ts
import styled from "styled-components";

// Garantir que o fundo roxo ocupe toda a tela
export const Container = styled.div`
  display: flex;
  flex-direction: column; /* Empilha a imagem e o texto verticalmente */
  align-items: center; /* Centraliza horizontalmente */
  justify-content: center; /* Centraliza verticalmente */
  text-align: center; /* Centraliza o texto */
  height: 100vh; /* Garante que o contêiner ocupe toda a altura da tela */
  padding: 20px;
`;

