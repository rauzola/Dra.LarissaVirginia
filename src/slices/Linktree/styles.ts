// styles.ts
import styled, { createGlobalStyle } from "styled-components";

// Garantir que o fundo roxo ocupe toda a tela
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Alinha os itens no topo */
  align-items: center; /* Centraliza horizontalmente */
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  width: 100%;
  height: 100vh; /* Garante que ocupe toda a altura da tela */
  background-color: #48294B; /* Fundo roxo */
  color: #ffffff; /* Cor do texto branca */
  margin: 0; /* Remove margens externas */
  box-sizing: border-box; /* Garante que o padding não afete a largura total */
`;

export const LinkItem = styled.a`
  display: block;
  font-size: 1rem;
  color: #ffffff;
  text-decoration: none;
  margin: 8px 0;
  padding: 10px 20px;
  text-align: center;
  background-color: #7b5dbb; /* Cor de fundo roxa mais clara */
  border: none; /* Remove qualquer borda */
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;
  
  /* Largura padrão para dispositivos móveis (80%) */
  width: 80%;
  
  &:hover {
    background-color: transparent;
    color: #fff; /* Texto roxo ao passar o mouse */
    border: 1px solid;
  }

  /* Para dispositivos maiores, largura de 50% */
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Imagem = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px 0;
`;

export const Nome = styled.span`
  display: block;
  font-size: 18px;
  margin: 10px 0;
`;

export const NomeSub = styled.span`
  display: block;
  font-size: 12px;
  margin: 10px 0;
`;

// Garantir que o body e html ocupem 100% da altura da tela
export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;
