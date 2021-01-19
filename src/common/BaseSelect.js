import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { v4 as uuid } from "uuid";


import {
  InputBase,
  FormControl,
  NativeSelect,
  InputLabel,
} from '@material-ui/core';


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "25px",
  },
  form: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    fontSize: "13px",
    border: "1px solid #ced4da",
    borderRadius: ".375rem",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: "1.75rem",
  },
}));


const BaseSelect = ({ textLabel, value, options, onChange }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.margin}>
      {textLabel ? <InputLabel htmlFor="demo-customized-select-native">{textLabel}</InputLabel> : <div/>}
      <NativeSelect
        id="demo-customized-select-native"
        value={value}
        onChange={onChange}
        input={<BootstrapInput />}
      >
        {options.map(({ name, value }) => <option key={uuid()} value={value}>{name}</option>)}
      </NativeSelect>
    </FormControl>
  );
}


export default BaseSelect;
