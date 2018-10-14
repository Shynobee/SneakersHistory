import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';

const styles = withStyles({
  root: {
    margin: 0
  },
});

class Body extends Component {
  render() {
    return (
      <div className="root">

      </div>
    );
  }
}

const BodyWithStyle = withStyles(styles)(Body);

export default BodyWithStyle;
