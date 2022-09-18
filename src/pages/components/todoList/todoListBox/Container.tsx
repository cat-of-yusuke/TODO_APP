import { NextPage } from "next";
import React from "react";
import { TodoItemType } from "../../../types/TodoItem";
import Presenter from "./Presenter";
import moment from "moment";

type Props = {
  doneFlg: boolean;
  items: TodoItemType[];
};

const Container: NextPage<Props> = (props) => {
  const { doneFlg, items } = props;

  // 第１引数のリストを第２引数の値でグループ化し、Mapで返します
  const groupBy = (
    list: TodoItemType[],
    keyGetter: { (item: any): string; (arg0: TodoItemType): any }
  ) => {
    const map = new Map();
    list.forEach((item: TodoItemType) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  };

  // TodoItem[]を日付毎にグループ化
  const groupedItems: Map<string, TodoItemType[]> = groupBy(items, (item) => {
    const date = moment(item.dueDate);
    return date.format("L");
  });

  // グループ化したMap<string, TodoItemType[]>を日付の降順にソート
  const sortedGroupedItems: Map<string, TodoItemType[]> = new Map(
    [...groupedItems].sort()
  );

  return <Presenter doneFlg={doneFlg} items={sortedGroupedItems} />;
};
export { Container as TodoListBox };
