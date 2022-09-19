import { Button, Checkbox } from "@mui/material";
import React from "react";
import style from "./TodoItem.module.css";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { NextPage } from "next";
import { TodoItemType } from "../../../types/TodoItem";
import moment from "moment";
import { ItemDetail } from "../ItemDetail/Container";

type Props = {
  item: TodoItemType;
  handleCheck: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleOpenDetailButton: () => void;
  handleCloseDetailButton: () => void;
  isShowDetail: boolean;
};
const Presneter: NextPage<Props> = (props) => {
  const {
    item,
    handleCheck,
    handleOpenDetailButton,
    handleCloseDetailButton,
    isShowDetail,
  } = props;
  return (
    <>
      <li className={style.todo_item}>
        <div>
          <Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleOutlineIcon />}
            onChange={handleCheck}
            defaultChecked={item.isDone}
          />
          <Button
            variant="text"
            color="primary"
            onClick={handleOpenDetailButton}
            sx={{ textTransform: "none" }}
          >
            {item.title}
          </Button>
        </div>
        <label className={style.item_time}>
          {moment(item.dueDate).format("HH:mm")}
        </label>
      </li>
      {isShowDetail && (
        <ItemDetail
          item={item}
          handleCloseDetailButton={handleCloseDetailButton}
        />
      )}
    </>
  );
};

export default Presneter;
