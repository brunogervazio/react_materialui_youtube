import React from 'react';

import AppBar from '../components/AppBar'
import Drawer from '../components/Drawer'

import { makeStyles, Box, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}))

export default function MenuLayout({children}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar />
      <Box display="flex">
        <Drawer />
        <Box>
          <Toolbar />
          <div>
            {children}
          </div>
        </Box>
      </Box>
    </div>      
  );
}