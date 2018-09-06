import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class OptionsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.button = null;
    this.state = {
      anchorEl: null,
      selectedIndex: 1,
    };
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index, option) => {
    this.props.onSelectAnswer(this.props.serial, option);
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, options } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button={this.button}
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="When device is locked"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              secondary={options[this.state.selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index, option)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

OptionsMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OptionsMenu);