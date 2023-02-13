import SignatureStyles from "@/styles/Signature.module.scss";

export const Signature = (): JSX.Element => {
  return (
    <div className={SignatureStyles.signature}>
      Design by{" "}
      <a
        className={SignatureStyles.signature__link}
        href="https://www.figma.com/community/file/1167449515098934659"
      >
        Ateendra Solanki
      </a>{" "}
      provided under{" "}
      <a
        className={SignatureStyles.signature__link}
        href="https://creativecommons.org/licenses/by/4.0/"
      >
        CC BY 4.0
      </a>
    </div>
  );
};
