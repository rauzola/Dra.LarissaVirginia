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

      {/* CoursesSection  inicio */}

      <div id="courses" className="courses-section">
        <div className="courses-content">
          <img
            src={slice.primary.imagem_cursos?.url || "Design-sem-nome-28.png"}
            alt={slice.primary.imagem_cursos?.alt || "Imagem Cursos"}
            className="courses-image"
          />
          <div className="courses-text">
            <h2>{slice.primary.cursos || "Cursos"}</h2>
            <div className="divider"></div>

            {slice.primary.texto_cursos ? (
              <PrismicRichText field={slice.primary.texto_cursos} />
            ) : (
              <>
                <p>Ministro cursos vips ensinando técnicas que valorizem a anatomia e naturalidade de cada paciente.</p>
                <p>Conheço as dificuldades em viver da harmonização, meu inicio não foi fácil e é com base na minha experiência de vida que levo muito mais do que técnica para dentro dos meus cursos.</p>
                <p>Sou fã e praticante da naturalidade, por isso é que meus cursos prometem lhe entregar muita elegância e naturalidade, minha intenção é que você tenha segurança para realizar o procedimento mais pedido dentro dos consultório do Brasil.</p>
              </>
            )}

            <div className="course-cards">
              {slice.primary.cards_cursos.map((item) => (
                <div key={item.nome_cards} className="course-card">
                  <img src={item.imagem_cards.url || "Design-sem-nome-28.png"} alt={slice.primary.imagem_cursos?.alt || "Imagem Cursos"} className="course-logo" />
                  <span>{item.nome_cards}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CoursesSection  FIM */}

      {/* AboutMeSection  inicio */}

      <div id="aboutMe" className={`about-me-section ${isTablet ? 'tablet' : ''} ${isMobile ? 'mobile' : ''}`}>

        <div className="about-me-content" id="aboutMe">

          <img
            src={slice.primary.imagem_sobre_mim?.url || "Design-sem-nome-28.png"}
            alt={slice.primary.imagem_sobre_mim?.alt || "Imagem Sobre"}
            className="about-me-image"
          />
          <div className="about-me-text">
            <h2>{slice.primary.sobre_mim || "Sobre mim..."}</h2>

            {slice.primary.texto_sobre_mim ? (
              <PrismicRichText field={slice.primary.texto_sobre_mim} />
            ) : (
              <>
                <p>Transformei meu sonho em realidade e agora, com minha própria clínica, estou pronta para te ajudar a revelar sua verdadeira beleza interior e exterior. A pandemia pode ter nos afastado dos cuidados pessoais, mas eu estou aqui para trazer de volta a confiança e o autocuidado que todos merecem.</p>
                <p>Desde o início da minha jornada na biomedicina, meu coração sempre pulsou pela estética injetável, e quando descobri o mundo dos ativos, soube que estava no caminho certo. Com estágios que me deram a experiência clínica necessária, minha paixão se solidificou, e a criação da minha clínica se tornou uma realidade.</p>
                <p>Cada dia é uma oportunidade de aprender e crescer, e durante essa jornada, descobri meu amor pela tricologia, realizando sonhos por meio de protocolos personalizados. Não só isso, mas também lancei meu próprio gloss com minha marca, que já é um sucesso.</p>
                <p><strong>Minha clínica é mais do que um espaço de beleza, é um refúgio de autocuidado e autoestima. Venha fazer parte dessa jornada de transformação e descoberta, porque a verdadeira beleza está esperando por você aqui.</strong></p>
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


      {/* AboutMeSection  FIM */}

      {/* googleMaps  inicio */}

      <div id="googleMaps" className={`google-map-section ${isTablet ? 'tablet' : ''} ${isMobile ? 'mobile' : ''}`}>
        <div className="google-map-container">
          <iframe
            title="Mapa da Clínica Luana Bianchi"
            className="google-map"
            src={slice.primary.googlemaps || "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6156.985364215175!2d-51.92533458980587!3d-23.42561697011774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0c4564fa9c9%3A0x9b513003f9b93713!2sR.%20N%C3%A9o%20Alves%20Martins%2C%20936%20-%20Zona%2001%2C%20Maring%C3%A1%20-%20PR%2C%2087050-110!5e0!3m2!1spt-BR!2sbr!4v1733258291212!5m2!1spt-BR!2sbr" }
            width="800"
            height="600"
            // allowFullScreen=""
            loading="lazy"
          >
          </iframe>
        </div>
      </div>




    </>
  );
}

export default Site;
