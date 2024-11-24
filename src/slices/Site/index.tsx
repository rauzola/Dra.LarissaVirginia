"use client"

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
// import * as S from "./styles";
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Header`.
 */
export type SiteProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Site = ({ slice }: SiteProps): JSX.Element => {
  const [menuActive, setMenuActive] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1207px)' });

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    console.log("Menu toggle clicked, menuActive:", !menuActive);
  };

  return (

    <>

      <section id="header" className="elementor-section">
        <div className="elementor-widget-container">
          <ul className="elementor-widget-container itens-list">
            <li className="icons-list-itens">
              <FontAwesomeIcon icon={faWhatsapp} className="svg" />
              <a href={slice.primary.link_do_numero || "(44) 9 9707-5986"} target="_blank" rel="noopener noreferrer">{slice.primary.numero_do_telefone || "(44) 9 9707-5986"}</a>
            </li>
            <li className="icons-list-itens desktop-only">
              <FontAwesomeIcon icon={faInstagram} className="svg" />
              <a href={slice.primary.link_do_insta || "dralarissavirginia"} target="_blank" rel="noopener noreferrer">{slice.primary.insta || "dralarissavirginia"}</a>
            </li>
            <li className="icons-list-itens desktop-only">
              <FontAwesomeIcon icon={faClock} className="svg" />
              {slice.primary.horario_de_atendimento || "De Segunda à Sexta das 09:00 as 18:00 - Sábado das 08:00 as 13:00 - Domingo: Fechado"}
            </li>
            <li className="icons-list-itens">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="svg" />
              {slice.primary.cidade || "Maringá/PR"}

            </li>
          </ul>
        </div>
      </section>

      <header className="header">
        <div className={`header-column logo-column ${isMobile || isTablet ? 'mobile' : ''}`}>
          <img
            src={slice.primary.logo.url || ""} alt={slice.primary.logo.alt || ""}
            className={`logo ${isMobile || isTablet ? 'mobile-logo' : ''}`}
          />
        </div>

        <div className={`header-column nav-column ${isMobile || isTablet ? 'mobile-nav' : ''}`}>
          {(isMobile || isTablet) && (
            <div className="menu-toggle" onClick={toggleMenu}>
              ☰
            </div>
          )}
          <nav className={`nav ${menuActive ? 'active' : ''}`}>
            {slice.primary.botoesdenavegacao.map((item, index) => (
              <ScrollLink
                key={item.link_do_buttao || index} // Use item.id se existir, senão use o índice como alternativa
                to={item.link_do_buttao || ""}
                smooth={true}
                duration={500}
                offset={10}
              >
                {item.nome_da_buttao}
              </ScrollLink>
            ))}
          </nav>
        </div>

        <div className="header-column button-column">
          <a href={slice.primary.link_do_numero || "https://WA.me/5544997075986"} target="_blank" rel="noopener noreferrer" className="contact-button-header">
            Fale Conosco
          </a>
        </div>
      </header>

      {/* HeroSection  inicio */}

      <div id="hero" className={`hero-section ${isTablet ? 'tablet' : ''} ${isMobile ? 'mobile' : ''}`}>
        <div className="hero-content">
          <h1>{slice.primary.texto_principal || "ENALTEÇA SUA BELEZA COM ELEGÂNCIA E NATURALIDADE"}</h1>
          <hr className="divider" />
          {slice.primary.texto_para_falar_do_lugar ? (
            <PrismicRichText field={slice.primary.texto_para_falar_do_lugar} />
          ) : (
            <span>
              Muito mais do que um espaço de beleza, é um refúgio de autocuidado e autoestima.
              Venha fazer parte dessa jornada de transformação e descoberta, porque a verdadeira beleza
              está <strong>esperando por você aqui.</strong>
            </span>
          )}

          <PrismicNextLink field={slice.primary.whatsapp}>
            <button className="contact-button">
              FALE CONOSCO
              <FontAwesomeIcon icon={faWhatsapp} className="svg" />
            </button>
          </PrismicNextLink>

        </div>
      </div>

      {/* HeroSection  FIM */}


      {/* MoreInfoSection  inicio */}

      <div id="moreInfo" className={`more-info-section ${isTablet ? 'tablet' : ''} ${isMobile ? 'mobile' : ''}`}>
        <div className="more-info-content">
          <img src={slice.primary.imagem_da_clinica?.url || "Design-sem-nome-28.png"} alt={slice.primary.imagem_da_clinica?.alt || "Imagem da Clínica"} className="info-image" />
          <div className="info-text">


            {slice.primary.sobre_a_clinica ? (
              <PrismicRichText field={slice.primary.sobre_a_clinica} />
            ) : (
              <>
                <h2>Sobre a Clínica</h2>
                <p>Bem-vinda à <strong>Clínica Larissa Virginia Estética Avançada</strong>, onde os sonhos se tornam realidade. Nosso compromisso vai além do comum. Estamos aqui para fazer você se sentir em casa, confortável e cuidado como merece.</p>
                <p>Investimos nas mais <strong>avançadas tecnologias</strong>, para sempre entregarmos o melhor. Cada paciente recebe um tratamento exclusivo, porque acreditamos na singularidade da beleza de cada um.</p>
                <p>Minha missão é simples, mas poderosa: <strong>‘ENALTEÇO SUA BELEZA COM ELEGÂNCIA E NATURALIDADE’</strong>. Para nós, a naturalidade é a chave da verdadeira beleza.</p>
                <p>Nossa visão é construir harmonia e gerenciar o envelhecimento, para que você se sinta no <strong>auge da sua beleza em todas as fases da vida.</strong></p>
                <p>E nossos valores? Eles são a base de tudo o que fazemos. Elegância, dinamismo, contemporaneidade e excelência. Queremos ser a <strong>referência em estética avançada</strong>, porque você merece o melhor.</p>
                <p><strong><em>Bem-vindo à Clínica Larissa Virginia, onde sua beleza é nossa prioridade.</em></strong></p>
              </>
            )}


            <a href={slice.primary.link_do_insta || "dralarissavirginia"} target="_blank" rel="noopener noreferrer">
              <button className="contact-button">
                VISITE O INSTAGRAM
                <FontAwesomeIcon icon={faInstagram} className="svg" />
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* MoreInfoSection  FIM */}

      {/* SpecialtiesSection  inicio */}

      <div id="specialties" className="specialties-section">
        <div className="highlighted-text">
          <p>{slice.primary.procedimentos_realizados_na_clinica || "PROCEDIMENTOS REALIZADOS NA CLÍNICA"}</p>
        </div>

        <div className="specialties-header">
          <h2>{slice.primary.nossas_especialidades || "Nossas Especialidades"}</h2>
          <div className="divider"></div>
        </div>

        <div
          className={`specialties-cards ${isMobile ? 'mobile' : isTablet ? 'tablet' : ''}`}
        >
          {slice.primary.cards_especialidades.map((item, index) => (
            <div key={item.especialidade.id || index} className="specialty-card">
              <img
                src={item.especialidade?.url || "Design-sem-nome-28.png"}
                alt={item.especialidade?.alt || "Imagem da Especialidades"}
                className="specialty-image"
              />

              <h3>{item.nome_especialidade}</h3>
              <div className="specialty-description">
                <PrismicRichText field={item.descricao_especialidade} />
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* SpecialtiesSection  FIM */}


    </>
  );
}

export default Site;
