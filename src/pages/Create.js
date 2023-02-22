import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Typography,
} from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    radio: {
      "&$checked": {
        color: "#ccc",
      },
    },
    checked: {},
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
      margin: theme.spacing(5),
    },
    form: {
      lineHeight: 5,
    },
  };
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("Car");
  const handleSubmit = (e) => {
    e.preventDefault();
    setDetailsError(false);
    setTitleError(false);

    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch(`http://localhost:3003/notes`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.fields}
          variant="outlined"
          label="Note Title"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.fields}
          variant="outlined"
          label="Details"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
          color="secondary"
        />

        <FormControl className={classes.fields}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="Money" control={<Radio />} label="Money" />
            <FormControlLabel value="Car" control={<Radio />} label="Car" />

            <FormControlLabel value="Home" control={<Radio />} label="Home" />
          </RadioGroup>
          <Button type="submit" color="secondary" variant="contained">
            Submit me
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
