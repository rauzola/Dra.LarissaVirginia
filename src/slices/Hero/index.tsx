"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";
import * as S from "./styles";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: React.FC<HeroProps> = ({ slice }) => {


  return (
    <>
    <h1>hello wolrd</h1>
    </>
  );
};

export default Hero;
