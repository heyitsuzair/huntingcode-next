import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import axios from "axios";
import { postContact } from "../utils/api";
const Contact = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [desc, setdesc] = useState();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      let apiData = {
        name,
        email,
        phone,
        desc,
      };
      const { data } = await axios.post(postContact, apiData);
      setname("");
      setemail("");
      setphone("");
      setdesc("");
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleFormSubmit}>
        <div class={`mb-3 ${styles.grid}`}>
          <div class={`mb-3 ${styles.grid}`}>
            <input
              type="email"
              class={styles.formControl}
              id="exampleInputEmail1"
              name="email"
              value={email}
              placeholder="Email"
              required
              onChange={(e) => setemail(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>
          <div class={`mb-3 ${styles.grid}`}>
            <input
              name="name"
              type="text"
              class={styles.formControl}
              value={name}
              required
              placeholder="Name"
              onChange={(e) => setname(e.target.value)}
              id="exampleInputName1"
            />
          </div>
          <div class={`mb-3 ${styles.grid}`}>
            <input
              name="phone"
              type="tel"
              class={styles.formControl}
              id="exampleInputTel1"
              placeholder="Phone"
              value={phone}
              required
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <div class={`mb-3 ${styles.grid}`}>
            <textarea
              onChange={(e) => setdesc(e.target.value)}
              name="desc"
              rows={6}
              cols={21}
              placeholder="Description"
              required
              class={styles.formControl}
              value={desc}
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
