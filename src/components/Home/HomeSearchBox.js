import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';


import {
  Button,
  Grid,
  InputBase,
} from '@material-ui/core';


import SearchIcon from '@material-ui/icons/Search';
import BaseSelect from '../../common/BaseSelect';


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


const HomeSearchBox = ({ handleSubmit }) => {
  const classes = useStyles();

  // const [city, setCity] = React.useState('');

  const cityOptions = [{ name: "Hồ Chí Minh", value: 0 }, { name: "Hà Nội", value: 1 }, { name: "Đà Nẵng", value: 2 }, { name: "Tất cả", value: "" }];

  // Init form data
  const [formData, setFormData] = useState({ searchText: "", city: 0 });

  // const onChangeSelectedCity = (event) => {
  //   setCity(event.target.value);
  // };

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            name="searchText"
            className={classes.input}
            placeholder="Nhập tên công ty..."
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={handleInputChange}
          />
        </form>
      </Grid>
      <Grid item>
        <BaseSelect
          name="city"
          value={formData.city}
          options={cityOptions}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary" onClick={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}>Xem Reviews</Button>
      </Grid>
    </Grid>
  );
}

export default HomeSearchBox;
