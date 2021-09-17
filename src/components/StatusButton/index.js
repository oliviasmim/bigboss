import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const StatusButton = () => {
  const classes = useStyles();
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          onChange={handleChange}
        >
          <MenuItem value={"Em Andamento"}>Em Andamento</MenuItem>
          <MenuItem value={"Concluído"}>Concluído</MenuItem>
          <MenuItem value={"Pendente"}>Pendente</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default StatusButton;
