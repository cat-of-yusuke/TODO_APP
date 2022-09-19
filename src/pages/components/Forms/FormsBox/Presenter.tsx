import { Box, Fab, TextField } from "@mui/material";
import { NextPage } from "next";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import style from "./FormBox.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValueType } from "../../../types/FormValue";

type Props = {
  onSubmit: SubmitHandler<FormValueType>;
};

const Presenter: NextPage<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueType>({
    resolver: yupResolver(schema),
  });

  return (
    <div className={style.editContainer}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "8px",
          marginLeft: "16px",
          marginRight: "16px",
        }}
      >
        <TextField
          label="TODO"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          {...register("title")}
          error={"title" in errors}
          helperText={errors.title?.message}
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
          minRows={4}
          maxRows={8}
          InputLabelProps={{ shrink: true }}
          {...register("memo")}
          error={"memo" in errors}
          helperText={errors.memo?.message}
          sx={{
            width: "90%",
            marginTop: "32px",
            marginLeft: "5%",
          }}
        />
        <Fab
          color="primary"
          aria-label="add"
          onClick={handleSubmit(onSubmit)}
          sx={{
            width: "64px",
            height: "64px",
            marginTop: "64px",
            marginLeft: "83%",
            zIndex: "50",
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </div>
  );
};

export default Presenter;
