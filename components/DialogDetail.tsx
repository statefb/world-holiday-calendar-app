import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { CalendarEvent } from "../lib/types/event";
import ButtonCancel from "./ButtonCancel";

export interface DialogDetailProps {
  open: boolean;
  event: CalendarEvent | null;
  onClose: () => void;
}

export default function DialogDetail(props: DialogDetailProps) {
  const { open, event, onClose } = props;
  const handleCancel = () => {
    // 閉じるボタン押下時
    onClose();
  };

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>イベント詳細</DialogTitle>

        <DialogContent>
          <Box>
            <List>
              <ListItem disablePadding>
                <ListItemText
                  primary={`国名: ${event?.extendedProps.countryName}`}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText
                  primary={`州名: ${event?.extendedProps.stateName}`}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText
                  primary={`地域名: ${event?.extendedProps.regionName}`}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText
                  primary={`祝日タイプ: ${event?.extendedProps.type}`}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText
                  primary={`祝日ルール: ${event?.extendedProps.rule}`}
                />
              </ListItem>
            </List>
          </Box>
        </DialogContent>
        <DialogActions>
          <ButtonCancel onClick={handleCancel} text="閉じる"></ButtonCancel>
        </DialogActions>
      </Dialog>
    </>
  );
}
