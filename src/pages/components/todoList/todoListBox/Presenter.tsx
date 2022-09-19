import { NextPage } from "next";
import React from "react";
import { TodoItemType } from "../../../types/TodoItem";
import { TodoListParDay } from "../TodoListParDay/Container";
import style from "./TodoListBox.module.css";

type PropsType = {
  doneFlg: boolean;
  items: Map<string, TodoItemType[]>;
};
const Presenter: NextPage<PropsType> = (props: PropsType) => {
  const { doneFlg, items } = props;

  return (
    <div className={style.todoListContainer}>
      {Array.from(items.keys()).map((key) => {
        return (
          <TodoListParDay
            key={key}
            items={items.get(key)!}
            dueDate={key}
            doneFlg={doneFlg}
          />
        );
      })}
    </div>
  );
};

export default Presenter;
