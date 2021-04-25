import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

export default function MobileNavbar() {
  const classes = useStyles();

  const [currentEl, setEl] = useState(null);
  const handleClick = (event) => {
    setEl(event.currentTarget);
  };
  const handleClose = () => {
    setEl(null);
  };
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      style={{ backgroundColor: '#4527a0' }}
    >
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
          <MenuItem onClick={handleClose}>Overview</MenuItem>
          <MenuItem onClick={handleClose}>Features</MenuItem>
          <MenuItem onClick={handleClose}>Details</MenuItem>
          <MenuItem onClick={handleClose}>Technology</MenuItem>
          <MenuItem onClick={handleClose}>FAQ</MenuItem>
        </Menu>
        <Fab aria-label="add" className={`${classes.fabButton} button-color`}>
          <AddIcon />
        </Fab>
        <div className={classes.grow} />
        <Button
          variant="contained"
          className="button-color"
          size="small"
          style={{ color: '#00bad2' }}
        >
          View Source
        </Button>
      </Toolbar>
    </AppBar>
  );
}
