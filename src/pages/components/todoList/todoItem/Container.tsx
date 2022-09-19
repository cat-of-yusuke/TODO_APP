import axios from "axios";
import moment from "moment";
import { NextPage } from "next";
import React, { useState } from "react";
import { useSWRConfig } from "swr";
import { TodoItemType } from "../../../types/TodoItem";
import Presneter from "./Presneter";

type Props = {
  item: TodoItemType;
};

const Container: NextPage<Props> = ({ item }) => {
  // 詳細画面の表示制御
  const [isShowDetail, setIsShowDetail] = useState(false);

  const { mutate } = useSWRConfig();

  // 詳細画面を閉じるボタンを押した場合
  const handleCloseDetailButton = (): void => {
    setIsShowDetail(false);
  };

  // 詳細画面を開くボタンを押した場合
  const handleOpenDetailButton = (): void => {
    setIsShowDetail(true);
  };

  // チェックボタンを押下した場合
  const handleCheck = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetItem = {
      id: item.id,
      isDone: event.target.checked,
    };

    await axios
      .post("/api/item/changeDoneStatus", targetItem)
      .catch((error) => {
        console.log(error);
      });
    await mutate("/api/item/fetchAllItems");
  };

  return (
    <Presneter
      item={item}
      handleCheck={handleCheck}
      handleOpenDetailButton={handleOpenDetailButton}
      handleCloseDetailButton={handleCloseDetailButton}
      isShowDetail={isShowDetail}
    />
  );
};

export { Container as TodoItem };
