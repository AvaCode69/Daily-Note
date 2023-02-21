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
} from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";
import { useHistory } from "react-router-dom";

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

export default function Create() {
  const classes = useStyles();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("car");
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
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.fields}
          variant="outlined"
          label="Name family"
          fullWidth
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.fields}
          variant="outlined"
          label="Details"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />

        <FormControl className={classes.fields}>
          <FormLabel>Note Category</FormLabel>

          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="Money" control={<Radio />} lable="Money" />
            <FormControlLabel value="car" control={<Radio />} lable="car" />
            <FormControlLabel value="home" control={<Radio />} lable="home" />
          </RadioGroup>
        </FormControl>

        <Button type="submit" color="secondary" variant="contained">
          Submit me
        </Button>
      </form>
    </Container>
  );
}
