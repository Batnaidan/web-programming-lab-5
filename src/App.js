import './App.css';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { useState } from 'react';
const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#4527a0',
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));
function App() {
  const classes = useStyles();
  const [matches, setMatch] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );
  const [currentEl, setEl] = useState(null);

  const handleClick = (event) => {
    setEl(event.currentTarget);
  };
  const handleClose = () => {
    setEl(null);
  };
  return (
    <div>
      <AppBar position="fixed" className="app-header">
        <Toolbar>
          <Typography variant="h4" noWrap className="app-title">
            Name & Title
          </Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={currentEl}
            keepMounted
            open={Boolean(currentEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              style={{ height: '1em', padding: '0', lineHeight: '50px' }}
            >
              Overview
            </MenuItem>
            <MenuItem onClick={handleClose}>Features</MenuItem>
            <MenuItem onClick={handleClose}>Details</MenuItem>
            <MenuItem onClick={handleClose}>Technology</MenuItem>
            <MenuItem onClick={handleClose}>FAQ</MenuItem>
          </Menu>
          <Fab aria-label="add" className={`${classes.fabButton} button-color`}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <Button variant="contained" className="button-color" size="small">
            View Source
          </Button>
        </Toolbar>
      </AppBar>
      <Container>hello</Container>
    </div>
  );
}

export default App;
