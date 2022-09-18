import axios from "axios";
import { NextPage } from "next";
import React from "react";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useSWRConfig } from "swr";
import { TodoItemType } from "../../../types/TodoItem";
import Presenter from "./Presenter";

type Props = {
  item: TodoItemType;
  handleCloseDetailButton: () => void;
};
const Container: NextPage<Props> = ({ item, handleCloseDetailButton }) => {
  const { mutate } = useSWRConfig();

  type FormValueType = {
    title: string;
    dueDate: Date;
    memo?: string;
  };

  const onEditBtnSubmit: SubmitHandler<FormValueType> = async (data) => {
    const editedItem = {
      id: item.id,
      title: data.title,
      dueDate: data.dueDate,
      memo: data.memo ?? "",
      done: item.isDone,
    };

    await axios.post("/api/items/editItem", editedItem).catch((error) => {
      console.log(error);
    });

    await mutate("/api/items/getAllItems");

    handleCloseDetailButton();
  };

  const onDeleteBtnSubmit = async () => {
    const deleteItem = {
      id: item.id,
    };
    await axios.post("/api/items/removeItem", deleteItem).catch((error) => {
      console.log(error);
    });
    await mutate("/api/items/getAllItems");

    handleCloseDetailButton();
  };

  return (
    <Presenter
      item={item}
      onEditBtnSubmit={onEditBtnSubmit}
      onDeleteBtnSubmit={onDeleteBtnSubmit}
      handleCloseDetailButton={handleCloseDetailButton}
    />
  );
};

export { Container as ItemDetail };
