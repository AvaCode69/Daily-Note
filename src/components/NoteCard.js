import {
  CardHeader,
  Card,
  IconButton,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { React } from "react";
import { yellow, green, pink, blue } from "@mui/material/colors";

const avatarBgColor = (note) => {
  if (note.category === "work") {
    return yellow[700];
  }
  if (note.category === "money") {
    return green[700];
  }
  if (note.category === "Car") {
    return pink[500];
  } else {
    return blue[500];
  }
};

export default function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: avatarBgColor(note) }}>
              {" "}
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
