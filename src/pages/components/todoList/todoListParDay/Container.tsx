import { NextPage } from "next";
import React from "react";
import { TodoItemType } from "../../../types/TodoItem";
import Presenter from "./Presenter";

type Props = {
  items: TodoItemType[];
  dueDate: string;
  doneFlg: boolean;
};
const Container: NextPage<Props> = (props) => {
  const { items, dueDate, doneFlg } = props;

  // doneFlgとstatusが一致するItemが存在するか判定します
  const isContainSameStatusItem = () => {
    let flg = false;
    items.forEach((item: TodoItemType) => {
      if (item.isDone === doneFlg) {
        flg = true;
      }
    });
    return flg;
  };

  return (
    <>
      {isContainSameStatusItem() && (
        <Presenter items={items} dueDate={dueDate} doneFlg={doneFlg} />
      )}
    </>
  );
};

export { Container as TodoListParDay };
