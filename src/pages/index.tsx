import Head from "next/head";
import Image from "next/image";
import homeStyles from "@/styles/Home.module.scss";
import { hubballi } from "@/fonts/hubballi";
import { cairo } from "@/fonts/cairo";
import { GetStaticProps } from "next";
import Link from "next/link";

interface HomeProps {
  name: string;
  specialization: string;
}

export default function Home({ name, specialization }: HomeProps) {
  return (
    <>
      <Head>
        <title>Simple Portfolio</title>
        <meta name="description" content="Simple portfolio design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={homeStyles.home}>
        <Image
          className={homeStyles.home__image}
          src="/profile-picture.png"
          width={405}
          height={412}
          alt=""
        />
        <Image
          className={homeStyles["home__image--mob"]}
          src="/profile-picture-mob.png"
          width={295}
          height={288}
          alt=""
        />
        <div className={homeStyles["home__text-container"]}>
          <h1 className={`${cairo.className} ${homeStyles.home__header}`}>
            {name}
          </h1>
          <p
            className={`${hubballi.className} ${homeStyles.home__specialization}`}
          >
            {specialization}
          </p>
          <div
            className={`${hubballi.className} ${homeStyles["home__links-container"]}`}
          >
            <Link className={homeStyles.home__link} href="/resume">
              Resume
            </Link>
            <Link className={homeStyles.home__link} href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  return {
    props: {
      name: "Name Surname",
      specialization: "Designer",
    },
  };
};
