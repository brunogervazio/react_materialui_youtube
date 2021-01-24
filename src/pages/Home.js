import React from 'react'
import {makeStyles, Typography, Grid, Box} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const videos = [
  {
    id: 1,
    title:
      'Video 1',
    channel: 'Bruno Gervazio',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube.png',
  },
  {
    id: 2,
    title:
      'Video 2',
    channel: 'Bruno Gervazio',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube.png',
  },
  {
    id: 3,
    title:
      'Video 3',
    channel: 'Bruno Gervazio',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube.png',
  },
  {
    id: 4,
    title:
      'Video 4',
    channel: 'Bruno Gervazio',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube.png',
  },
  {
    id: 5,
    title:
      'Video 5',
    channel: 'Bruno Gervazio',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube.png',
  },
  {
    id: 6,
    title: 'Video 6',
    channel: 'Bruno Gervazio',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube.png',
  },
  {
    id: 7,
    title:
      'Video 7',
    channel: 'Bruno Gervazio',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube.png',
  },
  {
    id: 8,
    title:
      'Video 8',
    channel: 'Bruno Gervazio',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/youtube.png',
  },
];

export default function Home(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant='h5'
        color='textPrimary'
        style={{ fontWeight: 600 }}
      >
        Recomendados
      </Typography>
      <Grid container spacing={3}>
        {
          videos.map((item, index) => (
            <Grid item lg={3} md={4} sm={6} xs={12}>
               <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}
