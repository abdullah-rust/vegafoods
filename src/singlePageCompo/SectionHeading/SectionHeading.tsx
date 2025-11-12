import React from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  subTitle: string;
  mainTitle: string;
  tagline: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subTitle,
  mainTitle,
  tagline,
}) => {
  return (
    <div className={styles.headingContainer}>
      <p className={styles.subTitle}>{subTitle}</p>
      <h2 className={styles.mainTitle}>{mainTitle}</h2>
      <p className={styles.tagline}>{tagline}</p>
    </div>
  );
};

export default SectionHeading;
