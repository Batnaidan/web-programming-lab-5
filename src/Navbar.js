import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerButton: {
    fontWeight: 600,
    color: 'rgba(181,169,217,255)',
    margin: '0.5rem',
  },
  buttons: {
    backgroundColor: '#4527a0',
  },
  plusIcon: {
    color: '#fff',
    backgroundColor: '#ff4081',
    position: 'absolute',
    bottom: -28,
    right: 20,
  },
}));
export default function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <Toolbar
        className={classes.buttons}
        style={{ backgroundColor: '#4527a0' }}
      >
        <Button color="inherit" size="large" className={classes.headerButton}>
          Overview
        </Button>
        <Button color="inherit" size="large" className={classes.headerButton}>
          Features
        </Button>
        <Button color="inherit" size="large" className={classes.headerButton}>
          Details
        </Button>
        <Button color="inherit" size="large" className={classes.headerButton}>
          Technology
        </Button>
        <Button color="inherit" size="large" className={classes.headerButton}>
          FAQ
        </Button>
      </Toolbar>
      <Fab
        aria-label="add"
        className={classes.plusIcon}
        style={{ backgroundColor: '#ff4081' }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
