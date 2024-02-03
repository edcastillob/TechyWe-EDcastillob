import React from "react";
import styles from "./Landing.module.css";
import backgroundImage from "../../public/2.png";

export const Landing = () => {
  return (
    <div className={styles.landing} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src="https://edcastillofulltimeforce.netlify.app/assets/code-5b23a244.png" alt="Landing" className={styles.image} />
        </div>
        <div className={styles.right}>
          <p className={styles.quote}>
            "Un buen desarrollador de software trabaja con disciplina y constancia desde el primer día."
            <br />- Omar Bradley
          </p>          
        </div>
      </div>
    </div>
  );
};


