"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import * as S from "./styles";
import { PrismicNextImage } from "@prismicio/next";

type LinktreeProps = SliceComponentProps<Content.LinktreeSlice>;

const Linktree = ({ slice }: LinktreeProps): JSX.Element => {
  return (
    <>
      <S.GlobalStyle />

      <S.Container>
        {/* <S.Image id="Photo" src="assets/Vivek.jpg" alt="VivekArtiste" /> */}
        <S.Imagem src={slice.primary.foto.url || ""} alt={slice.primary.foto.alt || ""} />
        <S.Nome>
          {slice.primary.nome}

          <S.NomeSub>
            {slice.primary.clinica_estetica}
          </S.NomeSub>
        </S.Nome>
        





        {slice.primary.links.map((item, index) => (
          <S.LinkItem key={index} href={item.link_do_texto.text || ""} target="_blank" rel="noopener noreferrer">
            {item.textolink}
          </S.LinkItem>
        ))}
      </S.Container>
    </>
  );
};

export default Linktree;
