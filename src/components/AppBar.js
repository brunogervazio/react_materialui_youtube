import React from 'react'
import { makeStyles, AppBar, Toolbar, IconButton, Button} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import VideoCall from '@material-ui/icons/VideoCall'
import Apps from '@material-ui/icons/Apps'
import MoreVert from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme) => ({
  appBar:{
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  icons:{
    marginRight: theme.spacing(),
  },
  logo:{
    height: '25px',
  },
  menuButton:{
    marginRight: theme.spacing(),
  },
  grow:{
    flexGrow: 1,
  },
}));

export default function AppBarComponent(){

  const classes = useStyles();

  return (
    <AppBar color='inherit' className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <img src="/images/preto.png" alt="logo" className={classes.logo}/>
        <div className={classes.grow}/>
        <IconButton className={classes.icons} color="inherit">
          <VideoCall />
        </IconButton>
        <IconButton className={classes.icons} color="inherit">
          <Apps />
        </IconButton>
        <IconButton className={classes.icons} color="inherit">
          <MoreVert />
        </IconButton>
        <Button startIcon={<AccountCircle />} variant='outlined' color='secondary'>Fazer Login</Button>
      </Toolbar>
    </AppBar>
  );
}