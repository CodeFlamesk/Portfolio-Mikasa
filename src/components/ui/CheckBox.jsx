import React from "react";

import styles from "./styleCheckBox.module.css";

const CheckBox = ({ id, children,customStyles, isChecked, onChange }) => {
  return (
    <div className={`flex  ${customStyles}`}>
      <label className={styles["checkbox-wrapper"]} htmlFor={id}>
        <input className={styles["checkbox-element"]} type="checkbox"
          checked={isChecked}
          onChange={() => onChange((prev) => !prev)}
          id={id} />
       {children}
      </label>
    </div>
  );
};

export default CheckBox;

