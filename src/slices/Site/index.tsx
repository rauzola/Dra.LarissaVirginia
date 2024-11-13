"use client"
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import * as S from "./styles";

/**
 * Props for `Site`.
 */
export type SiteProps = SliceComponentProps<Content.SiteSlice>;


/**
 * Component for "Site" Slices.
 */
const Site = ({ slice }: SiteProps): JSX.Element => {
  return (
    <S.Container >
      <PrismicNextImage field={slice.primary.imagem} />
      <p>{slice.primary.texto}</p>
    </S.Container>
  );
};

export default Site;