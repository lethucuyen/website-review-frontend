import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Grid,
  InputBase,
  Divider,
  IconButton,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
    border: "1px solid rgba(0,0,0,.05)",
    borderRadius: ".375rem",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: "1.75rem",
  },
  iconButton: {
    width: "36px",
    height: "36px",
    marginRight: "16px",
  },
  divider: {
    height: 38,
    marginLeft: 18,
    marginRight: 18,
  },
  searchIcon: {
    fontSize: "2.5rem",
  },
}));

const BaseSearchBox = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid item container lg>
        <form className={classes.form} noValidate className={classes.form}>
          <InputBase
            className={classes.input}
            placeholder="Nhập tên công ty..."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon className={classes.searchIcon} />
          </IconButton>
        </form>
      </Grid>
      <Grid item xs={12} sm container justify="flex-end">
        <Button variant="contained" color="secondary">Xem Reviews</Button>
      </Grid>
    </Grid>
  );
}

export default BaseSearchBox 
