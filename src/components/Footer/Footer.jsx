import React from "react";

import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.left}>
          <h1 style={{ color: "white" }}>Digital Hardware Solutions</h1>
          <p className={styles.byline}>We Build Products You Desire</p>
        </div>

        <div className={styles.right}>
          <button className={styles.contactus}>Contact Us</button>

          <div className={styles.icons}>
            <Facebook />
            <Instagram />
            <LinkedIn />
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        @2021 Digital Hardware Solutions, All rights reserved
      </div>
    </div>
  );
}
