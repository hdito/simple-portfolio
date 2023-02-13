import Head from "next/head";
import { GetStaticProps } from "next";
import QualificationStyles from "@/styles/Qualification.module.scss";
import { cairo } from "@/fonts/cairo";

interface QualificationProps {
  education: {
    university: string;
    period: string;
    gpa: string;
  };
  skills: string[];
  languages: { language: string; proficiency: string }[];
}

export default function Qualification({
  education: { university, period, gpa },
  skills,
  languages,
}: QualificationProps) {
  return (
    <>
      <Head>
        <title>Qualifiction</title>
        <meta name="description" content="My qualification" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${cairo.className} ${QualificationStyles.qualification}`}
      >
        <h1 className={QualificationStyles.qualification__header}>
          Qualification
        </h1>
        <div
          className={QualificationStyles["qualification__sections-container"]}
        >
          <section className={QualificationStyles.qualification__section}>
            <h2 className={QualificationStyles.qualification__subheader}>
              Education
            </h2>
            <p>{university}</p>
            <p>{period}</p>
            <p>{gpa}</p>
          </section>
          <section className={QualificationStyles.qualification__section}>
            <h2 className={QualificationStyles.qualification__subheader}>
              Skills
            </h2>
            <ul className={QualificationStyles["qualification__skills-list"]}>
              {skills.map((skill) => (
                <li
                  className={
                    QualificationStyles["qualification__skills-list__item"]
                  }
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
          <section className={QualificationStyles.qualification__section}>
            <h2 className={QualificationStyles.qualification__subheader}>
              Languages
            </h2>
            <ul>
              {languages.map((language) => (
                <li key={language.language}>
                  {language.language}—{language.proficiency}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<QualificationProps> = () => {
  return {
    props: {
      education: {
        university: "Btech in Computer Science, IIT, Delhi",
        period: "2013–2016",
        gpa: "92%",
      },
      skills: [
        "SEO Research",
        "Creative Writing",
        "Social Media",
        "Editing and Proofreading",
        "Email Marketing",
        "Research and Fact-checking",
        "Communication",
        "Keeping Deadlines",
      ],
      languages: [
        { language: "English", proficiency: "Fluent" },
        { language: "Hindi", proficiency: "Native" },
      ],
    },
  };
};
