import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import amber from '@material-ui/core/colors/amber';

import RegisterUserForm from './registerUserForm';
import RegisterAddressForm from './registerAddressForm';

import { register } from '../../http/sessionActions';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 4 + 'px 0' ,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  linkContainer: {
    marginTop: theme.spacing.unit * 4
  },
  link: {
    color: 'black',
    display: 'inline-block',
    textDecoration: 'none',
    '&:hover': {
      color: 'rgba(146,200,62,1)',
    },
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

class RegisterContainer extends Component {

  state = {
    page: 1,
    showSnack: true,
  };

  handleSnackClose = (event, reason) => {
    this.setState({ showSnack: false });
  };

  handleContinue = () => {
    this.setState({page: this.state.page + 1})
  }

  handleSubmit = (values) => {
    this.setState({ showSnack: true });
    this.props.register(values);
  }

  render() {
    const { classes, error } = this.props;
    const { page } = this.state;

    return(
      <Grid container justify="center">
        <Grid item xs={10} sm={7} md={4}>
          <Paper className={classes.paper}>
          {page === 1 && <RegisterUserForm onSubmit={this.handleContinue} />}
          {page === 2 && <RegisterAddressForm onSubmit={this.handleSubmit} />}
          <div className={classes.linkContainer}>
            <Typography variant="body2">
              <Link to="/login" className={classes.link}>¿Ya tienes una cuenta registrada?</Link>
            </Typography>
            <Typography variant="body2">
              <a href="mailto:info@prana.mx" className={classes.link}>¿Tienes algún problema?</a>
            </Typography>
          </div>
          </Paper>
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={error != '' && this.state.showSnack}
          onClose={this.handleSnackClose}
        >
          <SnackbarContent
            className={classes.warning}
            message={
              <span id="register-snackbar" className={classes.message}>
                <WarningIcon className={classNames(classes.icon, classes.iconVariant)} />
                {error}
              </span>
            }
          />
        </Snackbar>
      </Grid>
    )
  }
}

const mapStateToProps = function mapStateToProps(state, props) {
  return {
    loading: state.get('register').get('loading'),
    error: state.get('register').get('error'),
  };
};

function mapDispatchToProps(dispatch) {
  return Object.assign({},
    bindActionCreators({ register }, dispatch),
  );
}

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer));
