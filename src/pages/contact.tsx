import { cairo } from "@/fonts/cairo";
import ContactStyles from "@/styles/Contact.module.scss";

export default function Contact() {
  return (
    <main className={`${cairo.className} ${ContactStyles.contact}`}>
      <h1 className={ContactStyles.contact__header}>Contact</h1>
      <form className={ContactStyles.contact__form}>
        <div className={ContactStyles["contact__form__name-container"]}>
          <label
            className={`${ContactStyles["contact__form__name-container__field"]} ${ContactStyles.contact__form__label}`}
          >
            <span>First name:</span>
            <input
              className={ContactStyles.contact__form__field}
              type="text"
              name="firstName"
            />
          </label>
          <label
            className={`${ContactStyles["contact__form__name-container__field"]} ${ContactStyles.contact__form__label}`}
          >
            <span>Last name:</span>
            <input
              className={ContactStyles.contact__form__field}
              type="text"
              name="firstName"
            />
          </label>
        </div>
        <label className={ContactStyles.contact__form__label}>
          <span>Email ID:</span>
          <input
            className={ContactStyles.contact__form__field}
            type="text"
            name="firstName"
          />
        </label>
        <label className={ContactStyles.contact__form__label}>
          <span>Message:</span>
          <textarea
            rows={3}
            className={`${ContactStyles.contact__form__field} ${ContactStyles["contact__form__field--textarea"]}`}
            name="message"
          />
        </label>
        <button className={ContactStyles.contact__form__button}>
          Send Message
        </button>
      </form>
    </main>
  );
}
