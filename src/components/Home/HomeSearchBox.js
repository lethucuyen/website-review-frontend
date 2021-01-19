import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';


import {
  Button,
  Grid,
  InputBase,
  FormControl,
  NativeSelect,
  InputAdornment,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import BaseSelect from '../../common/BaseSelect';


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
  searchIcon: {
    fontSize: "2.5rem",
    width: "36px",
    height: "36px",
    marginLeft: "8px",
  },
}));


const HomeSearchBox = () => {
  const classes = useStyles();

  const [city, setCity] = React.useState('');

  const cityOptions = [{ name: "Hồ Chí Minh", value: 0 }, { name: "Hà Nội", value: 1 }, { name: "Đà Nẵng", value: 2 }, { name: "Tất cả", value: "" }];
  
  const onChangeSelectedCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={1}
      className={classes.root}
    >
      <Grid item xs={6} lg>
        <form className={classes.form} noValidate className={classes.form}>
          <SearchIcon className={classes.searchIcon} />
          <InputBase
            className={classes.input}
            placeholder="Nhập tên công ty..."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </form>
      </Grid>
      <Grid item>
        <BaseSelect
          value={city}
          options={cityOptions}
          onChange={onChangeSelectedCity}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary">Xem Reviews</Button>
      </Grid>
    </Grid>
  );
}

export default HomeSearchBox;
