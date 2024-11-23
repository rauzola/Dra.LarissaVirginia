// styles.ts

import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  background-color: #7b5dbb;
  height: 41px;
`;

export const WidgetContainer = styled.div`
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

export const IconsListItem = styled.li`
  text-decoration: none;
  color: #fff;
  padding: 0 18px;
  padding-left: 1px;

  & .svg {
    margin-right: 5px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
`;

export const HeaderColumn = styled.div<{ isMobile?: boolean }>`
  display: flex;
  align-items: center;
  margin: 0 25px;

  ${(props) =>
    props.isMobile &&
    `
    margin: 0;
    flex: 1 1 auto;
    justify-content: space-between;
  `}
`;

export const Logo = styled.img<{ isMobile?: boolean }>`
  max-width: 100%;
  height: 110px;
  margin-right: 0;

  ${(props) => props.isMobile && `height: 100px;`}
`;

export const Nav = styled.nav<{ active?: boolean; isMobile?: boolean }>`
  display: ${(props) => (props.isMobile ? "none" : "flex")};
  justify-content: ${(props) => (props.isMobile ? "flex-start" : "center")};
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  background-color: ${(props) => (props.isMobile ? "#fff" : "transparent")};
  position: ${(props) => (props.isMobile ? "absolute" : "static")};
  top: ${(props) => (props.isMobile ? "150px" : "auto")};
  left: 0;
  width: ${(props) => (props.isMobile ? "100%" : "auto")};
  padding: ${(props) => (props.isMobile ? "20px" : "0")};
  box-shadow: ${(props) =>
    props.isMobile ? "0px 8px 16px rgba(0, 0, 0, 0.1)" : "none"};
  z-index: ${(props) => (props.isMobile ? "1000" : "auto")};

  ${(props) => props.active && props.isMobile && `display: flex;`}

  a {
    margin: ${(props) => (props.isMobile ? "10px 0" : "0 15px")};
    text-decoration: none;
    color: ${(props) => (props.isMobile ? "#33373d" : "#616659")};
    font-weight: 600;
    line-height: 20px;
    cursor: pointer;
  }
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
  color: #7b5dbb;
  font-size: 15px;
  font-family: "Open Sans", Sans-serif;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid #7b5dbb;
  border-radius: 50px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7b5dbb;
    color: #fff;
  }
`;

export const ButtonColumn = styled.div`
  display: flex;
  justify-content: start;
`;
