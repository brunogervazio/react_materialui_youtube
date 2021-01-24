import React from 'react';
import { makeStyles, Toolbar, Drawer, List, ListItem, ListItemIcon,
        ListSubheader, ListItemText, Divider, Box, Button, Typography,
        Hidden } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircle from '@material-ui/icons/AddCircle';
import MusicNote from '@material-ui/icons/MusicNote';
import Sports from '@material-ui/icons/Sports'
import Games from '@material-ui/icons/Games'
import LocalMovies from  '@material-ui/icons/LocalMovies'
import Announcement from '@material-ui/icons/Announcement'
import LiveTv from '@material-ui/icons/LiveTv'
import YouTube from '@material-ui/icons/YouTube'

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  icons:{
    marginRight: theme.spacing(),
  },
  listItem:{
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: '24px',
  },
  listItemText: {
    fontSize: '14px'
	},
	subheader: {
		textTransform: 'uppercase'
	}
}));

export default function DrawerComponent(){

	const classes = useStyles();
	const itenslist1 = [
		{
			icon: <HomeIcon />,
			text: 'Inicio'
		},
		{
			icon: <Whatshot />,
			text: 'Em alta'
		},
		{
			icon: <Subscriptions />,
			text: 'Incrições'
		},
		
	];
	const itenslist2 = [
		{
			icon: <VideoLibrary />,
			text: 'Biblioteca'
		},
		{
			icon: <History />,
			text: 'História'
		},
		
	];
	const itenslist3 = [
		{
			icon: <MusicNote />,
			text: 'Música'
		},
		{
			icon: <Sports />,
			text: 'Esportes'
		},
		{
			icon: <Games />,
			text: 'Jogos'
		},
		{
			icon: <LocalMovies />,
			text: 'Filmes'
		},
		{
			icon: <Announcement />,
			text: 'Notícias'
		},
		{
			icon: <LiveTv />,
			text: 'Ao vivo'
		},
		{
			icon: <YouTube />,
			text: 'Destaques'
		},
	];

	const list1 = itenslist1.map(element =>
		<ListItem button classes={{root: classes.listItem}}>
			<ListItemIcon>
				{element.icon}
			</ListItemIcon>
			<ListItemText classes={{
				primary: classes.listItemText
			}}
			primary={element.text} />
		</ListItem>
	);
	const list2 = itenslist2.map(element => 
		<ListItem button classes={{ root: classes.listItem }}>
			<ListItemIcon>
				{element.icon}
			</ListItemIcon>
			<ListItemText
				classes={{
					primary: classes.listItemText,
				}}
				primary={element.text}
			/>
    </ListItem>
	);
	const list3 = itenslist3.map(element => 
		<ListItem button classes={{ root: classes.listItem }}>
			<ListItemIcon>
				{element.icon}
			</ListItemIcon>
			<ListItemText
				classes={{
					primary: classes.listItemText,
				}}
				primary={element.text}
			/>
		</ListItem>
	);

  return(
    <Hidden mdDown>
      <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {list1}              
          </List>
          <Divider />
          <List>
            {list2}
          </List>
          <Divider />
          <Box p={3}>
            <Typography variant='body2'>
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button startIcon={<AccountCircle />} variant='outlined' color='secondary'>Fazer Login</Button>
            </Box>
          </Box>
          <Divider />
          <List
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
              <ListSubheader
                component='div'
                id='nested-list-subheader'
                className={classes.subheader}
              >
                O Melhor do youtube
              </ListSubheader>
            }
          >
            {list3}
          </List>
          <Divider />
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Procurar mais'}
            />
          </ListItem>
          <Divider />
        </div>
      </Drawer>
    </Hidden>
  );
}