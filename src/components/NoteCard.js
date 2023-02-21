import {
  CardHeader,
  Card,
  IconButton,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { React } from "react";

export default function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <Card>
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
