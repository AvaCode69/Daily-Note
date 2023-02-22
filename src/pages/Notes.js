import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";
import { Container } from "@mui/system";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";
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
  const breakpointCols = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpointCols}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div item key={note.id} lg={4} md={6} xs={12}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
      {/* <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} lg={4} md={6} xs={12}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid> */}
    </Container>
  );
}
