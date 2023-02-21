import {
  CardHeader,
  Card,
  IconButton,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { React } from "react";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category == "car") {
        return `1px solid red`;
      }
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <div>
      <Card className={classes.test}>
        <CardHeader
          action={
            <IconButton>
              <DeleteOutlineOutlinedIcon
                onClick={() => handleDelete(note.id)}
              />
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
