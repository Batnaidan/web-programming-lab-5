import React, { useState } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import Navbar from './Navbar.js';
import MobileNavbar from './MobileNavbar.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '2rem 0',
  },
  flexRoot: {
    display: 'flex',
    flexDirection: 'column',
    margin: '2rem 0',
  },
  cover: {
    width: '250px',
    height: '250px',
    backgroundColor: '#b2dfdb',
  },
  flexCover: {
    alignSelf: 'center',
    backgroundColor: '#b2dfdb',
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
  },
  sourceButton: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    color: '#fff',
    fontWeight: 600,
    padding: '8px 12px',
  },
}));

function App() {
  const classes = useStyles();
  const [matches] = useState(window.matchMedia('(min-width: 960px)').matches);
  const [matches620] = useState(
    window.matchMedia('(min-width: 620px)').matches
  );
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <AppBar position="relative" className="app-header">
        <Toolbar>
          <Typography variant="h4" noWrap className="app-title">
            Name & Title
          </Typography>
        </Toolbar>
        {matches ? <Navbar /> : ''}
      </AppBar>
      {matches ? '' : <MobileNavbar />}
      <div>
        <Container maxWidth="md">
          <Card className={matches620 ? classes.root : classes.flexRoot}>
            <CardMedia
              className={matches620 ? classes.cover : classes.flexCover}
            >
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png"
                alt="after hours album cover"
                width="250"
              ></img> */}
            </CardMedia>
            <div className={classes.information}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                style={{ paddingBottom: 0 }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  color="textPrimary"
                  component="p"
                  style={{ padding: '0 24px' }}
                >
                  Features
                </Typography>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  component="p"
                  style={{ padding: '20px 24px' }}
                >
                  Dolore ex deserunt aute fugiat nulla ea sunt aliqua nisi
                  cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu
                  fugiat consectetur elit cillum esse.
                </Typography>
              </CardContent>
              <Divider></Divider>
              <div>
                <Button
                  color="primary"
                  style={{
                    color: '#00bad2',
                    fontWeight: '600',
                    margin: '3px 36px',
                  }}
                  size="large"
                >
                  Read our features
                </Button>
              </div>
            </div>
          </Card>
          <Card className={classes.root}>
            <div className={classes.information}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                style={{ paddingBottom: 0 }}
              />
              <CardContent style={{ padding: '0 16px' }}>
                <Typography
                  variant="h5"
                  color="textPrimary"
                  component="p"
                  style={{ padding: '0 24px' }}
                >
                  Details
                </Typography>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Lorem ipsum dolor sit amet"
                      secondary="Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis"
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Lorem ipsum dolor sit amet"
                      secondary="Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis"
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <ImageIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Lorem ipsum dolor sit amet"
                      secondary="Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </div>
          </Card>
        </Container>
      </div>
      {matches ? (
        <Button
          variant="contained"
          className={classes.sourceButton}
          size="large"
          style={{ backgroundColor: '#ff4081' }}
          href="https://github.com/Batnaidan/web-programming-lab-5"
        >
          View Source
        </Button>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
