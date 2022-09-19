import axios from "axios";
import { NextPage } from "next";
import React from "react";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useSWRConfig } from "swr";
import { FormValueType } from "../../../types/FormValue";
import { TodoItemType } from "../../../types/TodoItem";
import Presenter from "./Presenter";

type Props = {
  item: TodoItemType;
  handleCloseDetailButton: () => void;
};
const Container: NextPage<Props> = ({ item, handleCloseDetailButton }) => {
  const { mutate } = useSWRConfig();

  const onEditBtnSubmit: SubmitHandler<FormValueType> = async (data) => {
    const editedItem = {
      id: item.id,
      title: data.title,
      dueDate: data.dueDate,
      memo: data.memo,
      isDone: item.isDone,
    };

    await axios.post("/api/item/updateItem", editedItem).catch((error) => {
      console.log(error);
    });

    await mutate("/api/item/fetchAllItems");

    handleCloseDetailButton();
  };

  const onDeleteBtnSubmit = async () => {
    const deleteItem = {
      id: item.id,
    };
    await axios.post("/api/item/deleteItem", deleteItem).catch((error) => {
      console.log(error);
    });
    await mutate("/api/item/fetchAllItems");

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
