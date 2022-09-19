import { NextPage } from "next";
import React from "react";
import { FormBox } from "./FormsBox/Container";
import style from "./Forms.module.css";

const Presenter: NextPage = () => {
  return (
    <div className={style.edit}>
      <div className={style.title}>
        <h2 className={style.title}>EDIT</h2>
      </div>
      <FormBox />
    </div>
  );
};

export { Presenter as Form };
