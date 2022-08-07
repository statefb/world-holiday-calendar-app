import { Button } from "@mui/material";

export interface ButtonCancelProps {
  text: string;
  onClick: () => void;
}

export default function ButtonCancel(props: ButtonCancelProps) {
  const { text, onClick } = props;
  return (
    <Button variant="contained" color="secondary" onClick={onClick}>
      {text}
    </Button>
  );
}
