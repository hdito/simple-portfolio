import { GetStaticProps } from "next";
import Image from "next/image";
import ProjectsStyles from "@/styles/Projects.module.scss";
import { cairo } from "@/fonts/cairo";
import Head from "next/head";

interface ProjectsProps {
  cards: { alt: string; src: string }[];
}

export default function Projects({ cards }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Gallery of my projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={ProjectsStyles.projects}>
        <h1 className={`${cairo.className} ${ProjectsStyles.projects__header}`}>
          Projects
        </h1>
        <div className={ProjectsStyles["projects__cards-container"]}>
          {cards.map((card) => (
            <Image
              key={card.src}
              className={ProjectsStyles.projects__card}
              src={card.src}
              width={165}
              height={165}
              alt={card.alt}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = () => {
  return {
    props: {
      cards: [
        { src: "/project-1.png", alt: "Project 1" },
        { src: "/project-2.png", alt: "Project 2" },
        { src: "/project-3.png", alt: "Project 3" },
        { src: "/project-4.png", alt: "Project 4" },
        { src: "/project-5.png", alt: "Project 5" },
        { src: "/project-6.png", alt: "Project 6" },
      ],
    },
  };
};
