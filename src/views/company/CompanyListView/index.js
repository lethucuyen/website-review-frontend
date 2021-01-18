import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from '../../../components/Page';
import Toolbar from './Toolbar';
import CompanyCard from './CompanyCard';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  companyCard: {
    height: '100%'
  }
}));

const CompanyListView = () => {
  const classes = useStyles();
  const [companys] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Company"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {companys.map((company) => (
              <Grid
                item
                key={company.id}
                lg={4}
                md={6}
                xs={12}
              >
                <CompanyCard
                  className={classes.companyCard}
                  company={company}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Page>
  );
};

export default CompanyListView;
