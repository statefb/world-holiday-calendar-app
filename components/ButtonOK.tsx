import { Button } from "@mui/material";
import React from "react";

export interface ButtonOKProps {
  text: string;
  onClick: () => void;
}

export default function ButtonOK(props: ButtonOKProps) {
  const { text, onClick } = props;
  return (
    <Button variant="contained" color="success" onClick={onClick}>
      {text}
    </Button>
  );
}
