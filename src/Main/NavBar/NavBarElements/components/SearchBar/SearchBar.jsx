import React from 'react';
import PropTypes from 'prop-types';
import { link } from 'react-router';
import {
  withStyles,
  TextField
} from '@material-ui/core';

const styles = withStyles({
  root: {
    
  },
  textField: {

  }
});

class SearchBar extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SearchBarWithStyle = withStyles(styles)(SearchBar);

export default SearchBarWithStyle;