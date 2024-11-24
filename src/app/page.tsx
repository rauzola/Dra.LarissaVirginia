import { Metadata } from "next";
import Head from "next/head"; // Importando o componente Head do Next.js

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

// Função para gerar metadados da página
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Index() {
  // Cliente para consultar dados na API do Prismic
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return (
    <>
      {/* Adicionando a fonte ao <head> */}
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Renderizando os slices */}
      <SliceZone slices={home.data.slices} components={components} />
    </>
  );
}
