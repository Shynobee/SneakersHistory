import React from 'react';
import PropTypes from 'prop-types';
import { link } from 'react-router';
import {
  withStyles,
  AppBar,
  Toolbar,
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
                Sneakers History
            </Button>
            <Button>
                Nike
            </Button>
            <Button>
                Jordan
            </Button>
            <Button>
                Adidas
            </Button>
            <Button>
                Saucony
            </Button>
            <Button>
                Diadora
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