import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import AccountDialog from './accountDialog';
import ChangeNameForm from './changeNameForm';
import ChangePhone from './changePhone';
import ChangePassword from './changePassword';
import { openDialog, closeDialog } from './accountActions';
import { dialogs } from './accountConstants';


const styles = theme => ({
  paper: {
    border: `1px solid ${theme.palette.custom.lightGrey}`,
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 4}px`,
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 6}px`,
    },
  },
  paperTitleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  paperTitle: {
    marginBottom: theme.spacing.unit * 3,
  },
  dataContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: `${theme.spacing.unit * 2}px 0`,
    '&:first-child': {
      marginTop: 0,
    }
  },
  data: {
    color: 'rgba(0, 0, 0, 0.54)',
  }
});

class Account extends Component {

  handleDialogClose = () => {
    this.props.closeDialog();
  }

  handleDialogOpen = () => {
    this.props.openDialog(dialogs.NAME_DIALOG);
  }

  render() {
    const { classes, name, lastname, phone, dialog } = this.props;

    return (
      <React.Fragment>
        <Paper elevation={0} className={classes.paper}>
          <div className={classes.paperTitleContainer}>
            <Typography variant="title" className={classes.paperTitle}>
              Datos personales
            </Typography>
          </div>
          <div className={classes.dataContainer}>
            <div>
              <Typography variant="body2">
                Nombre:
              </Typography>
              <Typography variant="body1" className={classes.data}>
                {name} {lastname}
              </Typography>
            </div>
            <Button
              size="small"
              color="primary"
              onClick={this.handleDialogOpen}
            >
              Editar
            </Button>
          </div>
          <Divider />
          <div className={classes.dataContainer}>
            <div>
              <Typography variant="body2">
                Teléfono:
              </Typography>
              <Typography variant="body1" className={classes.data}>
                {phone}
              </Typography>
            </div>
            <ChangePhone />
          </div>
          <Divider />
          <div className={classes.dataContainer}>
            <div>
              <Typography variant="body2">
                Contraseña:
              </Typography>
              <Typography variant="body1" className={classes.data}>
                ********
              </Typography>
            </div>
            <ChangePassword />
          </div>
        </Paper>
        <AccountDialog>
          {{
            [dialogs.NAME_DIALOG]: (
              <ChangeNameForm handleClose={this.handleDialogClose}/>
            ),
          }[dialog]}
        </AccountDialog>
      </React.Fragment>
    )
  } 
}

const mapStateToProps = function mapStateToProps(state, props) {
  return {
    name: state.get('session').get('name'),
    lastname: state.get('session').get('lastname'),
    phone: state.get('session').get('phone'),
    dialog: state.get('account').get('dialog'),
  };
};

function mapDispatchToProps(dispatch) {
  return Object.assign({},
    bindActionCreators({ openDialog }, dispatch),
    bindActionCreators({ closeDialog }, dispatch),
  );
}

export default withStyles(styles)((connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)));