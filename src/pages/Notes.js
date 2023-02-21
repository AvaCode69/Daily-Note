import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";
import { Container } from "@mui/system";
import NoteCard from "../components/NoteCard";

const useStyles = makeStyles({
  btn: {
    fontSize: 20,
    background: "red",
    "&:hover": {
      background: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
  fields: {
    display: "block",
    background: "secondary",
    margin: 50,
  },
});

export default function Notes() {
  const classes = useStyles();

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3003/notes/` + id, {
      method: "DELETE",
    });
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} lg={4} md={6} xs={12}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
