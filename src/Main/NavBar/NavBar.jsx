import React from 'react';
import PropTypes from 'prop-types';
import { link } from 'react-router';
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core';

const styles = withStyles({
  root: {
    width: '100vh'
  },
});

class NavBar extends React.Component {

  render() {
    const { classes } = this.props;
    return (

      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Button>
              <Typography variant="h6" color="inherit">
                Sneakers History
              </Typography>
            </Button>
            <Button>
              <Typography variant="h6" color="inherit">
                Nike
              </Typography>
            </Button>
            <Button>
              <Typography variant="h6" color="inherit">
                Jordan
              </Typography>
            </Button>
            <Button>
              <Typography variant="h6" color="inherit">
                Adidas
              </Typography>
            </Button>
            <Button>
              <Typography variant="h6" color="inherit">
                Saucony
              </Typography>
            </Button>
            <Button>
              <Typography variant="h6" color="inherit">
                Diadora
              </Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const NavBarWithStyle = withStyles(styles)(NavBar);

export default NavBarWithStyle;