import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";

const ContactForm = () => {
  const [clientName, setName] = useState("Aaa");
  const [email, setEmail] = useState("aaa@gmail.com");
  const [text, setText] = useState("Nothing typed yet");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log(clientName, email, text);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize={"24px"} />}
          />
          <Button text="VIA CALL" icon={<IoCall fontSize={"24px"} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<AiOutlineMail fontSize={"24px"} />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="5" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>
          <div>{clientName + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="Contact Image" />
      </div>
    </section>
  );
};

export default ContactForm;
