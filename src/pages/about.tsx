import AboutStyles from "@/styles/About.module.scss";
import Head from "next/head";
import { GetStaticProps } from "next";
import { cairo } from "@/fonts/cairo";
import { inter } from "@/fonts/inter";
import Image from "next/image";

interface AboutProps {
  content: string;
}

export default function About({ content }: AboutProps) {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Personal information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={AboutStyles.about}>
        <Image
          className={`${AboutStyles.about__arrows} ${AboutStyles["about__arrows--top"]}`}
          src="/arrows.svg"
          width={160}
          height={100}
          alt=""
        />
        <main className={AboutStyles["about__text-block"]}>
          <h1 className={`${cairo.className} ${AboutStyles.about__header}`}>
            About me
          </h1>
          <p className={inter.className}>{content}</p>
        </main>
        <Image
          className={`${AboutStyles.about__arrows} ${AboutStyles["about__arrows--bottom"]}`}
          src="/arrows.svg"
          width={160}
          height={100}
          alt=""
        />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = () => {
  return {
    props: {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  };
};
