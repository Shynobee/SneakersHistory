import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { classes } = this.props;
    return (

      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Sneakers History
            </Typography>
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