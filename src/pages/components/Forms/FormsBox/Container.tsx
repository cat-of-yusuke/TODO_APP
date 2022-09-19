import axios from "axios";
import { NextPage } from "next";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { useSWRConfig } from "swr";
import { FormValueType } from "../../../types/FormValue";
import Presenter from "./Presenter";

const Container: NextPage = () => {
  const { mutate } = useSWRConfig();

  const onSubmit: SubmitHandler<FormValueType> = async (data) => {
    const createItem = {
      id: crypto.randomUUID(),
      title: data.title,
      dueDate: data.dueDate,
      memo: data.memo,
      done: false,
    };

    await axios.post("/api/item/createItem", createItem).catch((error) => {
      console.log(error);
    });

    await mutate("/api/item/fetchAllItems");
  };

  return <Presenter onSubmit={onSubmit} />;
};

export { Container as FormBox };
