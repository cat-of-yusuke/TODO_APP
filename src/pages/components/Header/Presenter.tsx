import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import style from "./Header.module.css";

const Presenter: NextPage = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Image
          src="/logo/logo-no-title.png"
          alt="logo"
          width={60}
          height={50}
        />
      </div>
      <h1 className={style.title}>TODO APP</h1>
      <div className={style.spacer}></div>
    </header>
  );
};

export { Presenter as Header };
