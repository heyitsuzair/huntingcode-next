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
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleFormSubmit}>
        <div class={`mb-3 ${styles.grid}`}>
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            name="email"
            value={email}
            required
            onChange={(e) => setemail(e.target.value)}
            aria-describedby="emailHelp"
          />

          <div class={`mb-3 ${styles.grid}`}>
            <label for="exampleInputName1" class="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              class="form-control"
              value={name}
              required
              onChange={(e) => setname(e.target.value)}
              id="exampleInputName1"
            />
          </div>
          <div class={`mb-3 ${styles.grid}`}>
            <label for="exampleInputTel1" class="form-label">
              Phone
            </label>
            <input
              name="phone"
              type="tel"
              class="form-control"
              id="exampleInputTel1"
              value={phone}
              required
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <div class={`mb-3 ${styles.grid}`}>
            <label for="exampleInputDescription1" class="form-label">
              Description
            </label>
            <textarea
              onChange={(e) => setdesc(e.target.value)}
              name="desc"
              rows={6}
              cols={21}
              required
            >
              {desc}
            </textarea>
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
