"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
// import * as S from "./styles";
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

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
          <h1>ENALTEÇA SUA BELEZA COM ELEGÂNCIA E NATURALIDADE</h1>
          <hr className="divider" />
          <p>
            Muito mais do que um espaço de beleza, é um refúgio de autocuidado e autoestima.
            Venha fazer parte dessa jornada de transformação e descoberta, porque a verdadeira
            beleza está <strong>esperando por você aqui.</strong>
          </p>
          <a href="https://wa.me/5544997731044" target="_blank" rel="noopener noreferrer">
            <button className="contact-button">
              FALE CONOSCO
              <FontAwesomeIcon icon={faWhatsapp} className="svg" />
            </button>
          </a>
        </div>
      </div>

      {/* HeroSection  FIM */}


    </>
  );
}

export default Site;
