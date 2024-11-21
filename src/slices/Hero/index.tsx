"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import * as S from "./styles";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: React.FC<HeroProps> = ({ slice }) => {
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1207 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Define a imagem de fundo dinamicamente
  const backgroundImage = isTablet || isMobile
    ? slice.primary.imagem_de_fundo_herosection_mobile?.url || "mobile"
    : slice.primary.imagem_de_fundo_herosection_web?.url || "web"

  return (
    <S.HeroSection backgroundImage={backgroundImage} isTablet={isTablet} isMobile={isMobile}>
      <S.HeroContent>
        <S.Title isTablet={isTablet} isMobile={isMobile}>
          {slice.primary.textoprincipal || "ENALTEÇA SUA BELEZA COM ELEGÂNCIA E NATURALIDADE"}
        </S.Title>
        <S.Divider isMobile={isMobile} />
        <S.Paragraph isTablet={isTablet} isMobile={isMobile}>
          {slice.primary.texto_para_falar_do_lugar ? (
            <PrismicRichText field={slice.primary.texto_para_falar_do_lugar} />
          ) : (
            <span>
              Muito mais do que um espaço de beleza, é um refúgio de autocuidado e autoestima.
              Venha fazer parte dessa jornada de transformação e descoberta, porque a verdadeira beleza
              está <strong>esperando por você aqui.</strong>
            </span>
          )}
        </S.Paragraph>
        <a href={slice.primary.whatsapp || "https://wa.me/5544997075986"} target="_blank" rel="noopener noreferrer">
          <S.ContactButton isTablet={isTablet} isMobile={isMobile}>
            FALE CONOSCO
            <S.SvgIcon isTablet={isTablet} isMobile={isMobile}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </S.SvgIcon>
          </S.ContactButton>
        </a>
      </S.HeroContent>
    </S.HeroSection>
  );
};

export default Hero;
