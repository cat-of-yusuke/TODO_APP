import { Box } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../../../prisma/fetcher";
import { TodoItemType } from "../types/TodoItem";
import { Form } from "./Forms/Presenter";
import { TodoList } from "./TodoList/Container";

type DataType = {
  items: TodoItemType[];
};

const Top: NextPage = () => {
  const { data, error } = useSWR<DataType, Error>(
    "/api/item/fetchAllItems",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fffee6",
      }}
    >
      <TodoList items={data.items} />
      <Form />
    </Box>
  );
};

export default Top;
