import { NextPage } from "next";
import React, { useState } from "react";
import { TodoItemType } from "../../types/TodoItem";
import Presneter from "./Presneter";

type Props = {
  items: TodoItemType[];
};
const Container: NextPage<Props> = ({ items }) => {
  // 表示するTODO Itemのステータス制御
  const [doneState, setDoneState] = useState(false);

  const handleSwitch = () => {
    setDoneState(!doneState);
  };

  return (
    <Presneter
      items={items}
      doneState={doneState}
      handleSwitch={handleSwitch}
    />
  );
};

export { Container as TodoList };
