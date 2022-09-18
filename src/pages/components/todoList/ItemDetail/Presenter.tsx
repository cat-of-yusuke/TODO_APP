import { Box, Fab, TextField } from "@mui/material";
import { NextPage } from "next";
import React from "react";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { TodoItemType } from "../../../types/TodoItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { schema } from "./schema";

type FormValueType = {
  title: string;
  dueDate: Date;
  memo?: string;
};

type Props = {
  item: TodoItemType;
  onEditBtnSubmit: any;
  onDeleteBtnSubmit: () => Promise<void>;
  handleCloseDetailButton: () => void;
};
const Presenter: NextPage<Props> = (props) => {
  const { item, onEditBtnSubmit, onDeleteBtnSubmit, handleCloseDetailButton } =
    props;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueType>({
    // useFormの型は必ず指定する(<FormValueType>部分)
    resolver: yupResolver(schema),
  });

  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "100",
        backdropFilter: "blur(10px)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          border: "solid 1px #555555",
          borderRadius: "10px",
          width: "800px",
          height: "550px",
          backgroundColor: "#fffee6",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2>DETAIL</h2>
          <Fab
            color="primary"
            aria-label="close"
            size="small"
            onClick={handleCloseDetailButton}
            sx={{}}
          >
            <HighlightOffIcon />
          </Fab>
        </Box>

        <TextField
          label="TODO"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          error={"title" in errors}
          helperText={errors.title?.message}
          defaultValue={item.title}
          sx={{
            width: "90%",
            marginTop: "16px",
            marginLeft: "5%",
          }}
        />

        <TextField
          label="DUE DATE"
          variant="outlined"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          {...register("dueDate")}
          error={"dueDate" in errors}
          helperText={errors.dueDate?.message}
          defaultValue={item.dueDate}
          sx={{
            width: "200px",
            marginTop: "32px",
            marginLeft: "5%",
          }}
        />

        <TextField
          label="MEMO"
          variant="outlined"
          multiline={true}
          rows={4}
          InputLabelProps={{ shrink: true }}
          {...register("memo")}
          error={"memo" in errors}
          helperText={errors.memo?.message}
          defaultValue={item.memo}
          sx={{
            width: "90%",
            marginTop: "32px",
            marginLeft: "5%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          <Fab
            color="secondary"
            aria-label="change"
            size="medium"
            onClick={handleSubmit(onEditBtnSubmit)}
            sx={{
              marginLeft: "30%",
            }}
          >
            <ChangeCircleOutlinedIcon />
          </Fab>
          <Fab
            color="primary"
            aria-label="delete"
            size="medium"
            onClick={onDeleteBtnSubmit}
            sx={{
              marginRight: "30%",
            }}
          >
            <DeleteForeverOutlinedIcon />
          </Fab>
        </Box>
      </Box>
    </Box>
  );
};

export default Presenter;
