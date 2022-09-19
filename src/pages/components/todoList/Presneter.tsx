import { FormControlLabel, Switch } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import { TodoItemType } from "../../types/TodoItem";
import style from "./TodoList.module.css";
import { TodoListBox } from "./TodoListBox/Container";

type Props = {
  items: TodoItemType[];
  doneState: boolean;
  handleSwitch: () => void;
};
const Presneter: NextPage<Props> = (props) => {
  const { items, doneState, handleSwitch } = props;

  return (
    <div className={style.todoList}>
      <div className={style.switch_and_title}>
        <FormControlLabel
          className={style.switch}
          control={<Switch />}
          label="DONE"
          onChange={handleSwitch}
        />
        <h2 className={style.title}>TODO LIST</h2>
        <div className={style.spacer}></div>
      </div>
      <TodoListBox doneFlg={doneState} items={items} />
    </div>
  );
};

export default Presneter;
