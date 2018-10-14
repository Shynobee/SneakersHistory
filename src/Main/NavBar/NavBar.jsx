import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { 
  withStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Button,
 } from '@material-ui/core';
import { SearchBar } from './NavBarElements/components/SearchBar'

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    display: 'flex',
    
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
});

class NavBar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
        <Button>
          Sneakers History Logo
        </Button>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Nike" />
            <Tab label="Jordan" />
            <Tab label="Adidas" />
            <Tab label="Saucony" />
            <Tab label="Diadora" />
          </Tabs>
          <SearchBar/>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>Nike</TabContainer>
          <TabContainer dir={theme.direction}>Jordan</TabContainer>
          <TabContainer dir={theme.direction}>Adidas</TabContainer>
          <TabContainer dir={theme.direction}>Saucony</TabContainer>
          <TabContainer dir={theme.direction}>Diadora</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

const NavBarWithStyle = withStyles(styles, { withTheme: true })(NavBar);

export default NavBarWithStyle;