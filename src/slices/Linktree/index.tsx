"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import * as S from "./styles";

type LinktreeProps = SliceComponentProps<Content.LinktreeSlice>;

const Linktree = ({ slice }: LinktreeProps): JSX.Element => {

  if (!slice.primary) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      {/* <S.GlobalStyle /> */}

      <S.Container>
        {slice.primary.foto.url && (
          <S.Imagem
            src={slice.primary?.foto?.url || "/placeholder.jpg"}
            alt={slice.primary?.foto?.alt || "Imagem padrão"}
          />
        )}

        {slice.primary.nome && (
          <S.Nome>
            {slice.primary.nome}
            {slice.primary.clinica_estetica && (
              <S.NomeSub>{slice.primary.clinica_estetica}</S.NomeSub>
            )}
          </S.Nome>
        )}

        {slice.primary.links?.map((item, index) =>
          item.link_do_texto.text ? (
            <S.LinkItem
              key={index}
              href={item.link_do_texto.text}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.textolink || "Texto do link"}
            </S.LinkItem>
          ) : null
        )}
      </S.Container>
    </>
  );
};

export default Linktree;
