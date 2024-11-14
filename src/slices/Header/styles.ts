// styles.ts

import styled, { createGlobalStyle } from "styled-components";




export const HeaderSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: #616659;
  height: 41px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  list-style: none;
  font-family: "Open Sans", Sans-serif;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  padding: 0 12px;
`;

export const ItemList = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  color: #fff;
  padding: 0 25px;
  padding-left: 1px;
  text-decoration: none;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  margin: 0 25px;
  &.logo-column {
    img {
      max-width: 100%;
      height: 110px;
      margin-right: 0;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  font-family: "Open Sans", Sans-serif;
  padding: 0;
  margin: 0;

  &.active {
    display: flex;
  }

  a {
    margin: 0 15px;
    text-decoration: none;
    color: #616659;
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
  }
`;

export const ButtonColumn = styled.div`
  display: flex;
  justify-content: start;
`;

export const MenuToggle = styled.div`
  display: block;
  cursor: pointer;
  font-size: 22px;
  color: #000;
  font-weight: 600;
  margin-left: auto;
  position: relative;
  z-index: 1001;
`;

export const ContactButtonHeader = styled.a`
  display: inline-block;
  padding: 10px 35px;
  color: #616659;
  font-size: 15px;
  font-family: "Open Sans", Sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid #616659;
  border-radius: 50px;
  transition: background-color 0.3s ease;
`;

// Responsividade
export const DesktopOnly = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
