import { NextPage } from "next";
import React, { ReactElement } from "react";
import { Header } from "../Header/Presenter";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const Presneter = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export { Presneter as Layout };
