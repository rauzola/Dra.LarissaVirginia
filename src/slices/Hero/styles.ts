import styled from "styled-components";

// Definindo as props
interface HeroSectionProps {
  backgroundImage: string;
  isTablet?: boolean;
  isMobile?: boolean;
}

export const HeroSection = styled.div.withConfig({
  shouldForwardProp: (prop) => !["backgroundImage", "isTablet", "isMobile"].includes(prop),
})<HeroSectionProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 10%;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  color: #3d3d3d;
  height: 75vh;
  overflow: hidden;

  ${({ isTablet }) =>
    isTablet &&
    `
      flex-direction: column;
      padding: 0 10%;
      height: 130vh;
      text-align: center;
      background-size: 150%;
    `}

  ${({ isMobile }) =>
    isMobile &&
    `
      flex-direction: column;
      padding: 15px 10px 0px 10px;
      height: 850px;
      text-align: center;
      background-size: 150%;
    `}
`;

export const HeroContent = styled.div`
  max-width: 700px;
  padding: 10px;
  text-align: start;
`;

interface TitleProps {
  isTablet?: boolean;
  isMobile?: boolean;
}

export const Title = styled.h1.withConfig({
  shouldForwardProp: (prop) => !["isTablet", "isMobile"].includes(prop),
})<TitleProps>`
  font-family: "Open Sans", Sans-serif;
  font-size: ${({ isMobile }) => (isMobile ? "24px" : "44px")};
  font-weight: 700;
  line-height: ${({ isMobile }) => (isMobile ? "30px" : "54px")};
  letter-spacing: -2.3px;
  margin-bottom: 30px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  box-sizing: border-box;
`;

interface ParagraphProps {
  isTablet?: boolean;
  isMobile?: boolean;
}

export const Paragraph = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isTablet", "isMobile"].includes(prop),
})<ParagraphProps>`
  width: ${({ isTablet }) => (isTablet ? "100%" : "")};
  font-family: "Open Sans", Sans-serif;
  font-size: ${({ isMobile }) => (isMobile ? "13px" : "15px")};
  font-weight: 400;
  margin-bottom: 30px;
  color: ${({ isMobile }) => (isMobile ? "#000" : "#7A7A7A")};
  line-height: 1.5;
  text-align: ${({ isTablet }) => (isTablet ? "justify" : "start")};
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  box-sizing: border-box;
`;

interface DividerProps {
  isMobile?: boolean;
}

export const Divider = styled.hr.withConfig({
  shouldForwardProp: (prop) => prop !== "isMobile",
})<DividerProps>`
  width: 70%;
  height: 2px;
  margin: 0 auto;
  margin-top: ${({ isMobile }) => (isMobile ? "-15px" : "-5px")};
`;

interface ContactButtonProps {
  isTablet?: boolean;
  isMobile?: boolean;
}

export const ContactButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["isTablet", "isMobile"].includes(prop),
})<ContactButtonProps>`
  display: inline-block;
  padding: ${({ isMobile }) => (isMobile ? "8px 20px" : "9px 20px")};
  font-family: "Open Sans";
  font-size: ${({ isTablet }) => (isTablet ? "24px" : "15px")};
  color: #62675a;
  border: 1px solid #62675a;
  border-radius: 20px;
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-top: ${({ isMobile }) => (isMobile ? "-10px" : "0")};
`;


export const SvgIcon = styled.span<{ isTablet?: boolean; isMobile?: boolean }>`
  margin-left: ${({ isTablet, isMobile }) => (isMobile ? "5px" : isTablet ? "15px" : "10px")};
`;
