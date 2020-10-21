import React from "react";
import styles from "../../assets/css/components/back-button.module.scss";

interface Iprops {
  clickAction: Function;
}

const BackButton = ({ clickAction }: Iprops) => {
  return (
    <div className={styles.backButton} onClick={() => clickAction()}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
          fill="#EE7201"
        />
      </svg>
    </div>
  );
};

export default BackButton;
