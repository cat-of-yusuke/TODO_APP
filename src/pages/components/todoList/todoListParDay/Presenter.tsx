import { Divider } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { TodoItemType } from "../../../types/TodoItem";
import { TodoItem } from "../TodoItem/Container";
import style from "./TodoListParDay.module.css";

type Props = {
  items: TodoItemType[];
  dueDate: string;
  doneFlg: boolean;
};

const Presenter: NextPage<Props> = (props) => {
  const { items, dueDate, doneFlg } = props;

  return (
    <>
      <>
        <Divider
          sx={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {dueDate}
        </Divider>
      </>
      <ul className={style.items_list}>
        {items.map((item) => {
          return (
            item.isDone === doneFlg && <TodoItem key={item.id} item={item} />
          );
        })}
      </ul>
    </>
  );
};

export default Presenter;
