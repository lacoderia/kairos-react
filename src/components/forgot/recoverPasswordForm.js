import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, Field, Form } from 'redux-form/immutable';

import { 
  Grid,
  Button,
  Typography,
  withStyles
} from '@material-ui/core';

import { renderTextField } from 'library/utils/inputs';

const styles = theme => ({
  error: {
    color: theme.palette.error.main,
    marginTop: theme.spacing(1),
    textAlign: 'left'
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(-2),
    textAlign: 'right',
  },
});

const validate = values => {
  const errors = {}
  if (!values.get('email')) {
    errors.email = 'Introduce una dirección de correo electrónico'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Introduce un correo electrónico válido';
  }
  return errors;
}

const form = {
  form: 'recoverPassword',
  validate
}

class RecoverPasswordForm extends Component {

  render() {
    const { classes, handleSubmit, formError } = this.props;

    return(
      <Form onSubmit={handleSubmit}>
        <div>
          <Typography variant="body2" align="left">
            Proporciona tu correo electrónico registrado
          </Typography>
        </div>
        <div>
          <Field
            name="email"
            type="email"
            component={renderTextField}
            label="Correo electrónico"
            margin="normal"
            autoFocus={true}
          />
        </div>
        <Typography variant="body2" className={classes.error}>
          {formError}
        </Typography>
        <div className={classes.buttonContainer}>
          <Grid
            container
            direction="row"
            justify="space-between"
          >
            <Grid item>
              <Button 
                component={Link}
                to="/login"
                color="primary"
              >
                Atrás
              </Button>
            </Grid>
            <Grid item>
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
              >
                Recuperar contraseña
              </Button>
            </Grid>
          </Grid>
        </div>
      </Form>
    )
  }
}

const mapStateToProps = function mapStateToProps(state, props) {
  return {
    formError: state.get('forgot').get('error'),
  };
};

function mapDispatchToProps(dispatch) {
  return {}
}

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm(form)(RecoverPasswordForm)));
