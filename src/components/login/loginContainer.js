import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Text } from 'react-form';

import sessionActions from '../../http/sessionActions';

class LoginContainer extends Component {

  render() {
    
    const validate = value => ({
      error: !value || !/Hello World/.test(value) ? "Input must contain 'Hello World'" : null,
      warning: !value || !/^Hello World$/.test(value) ? "Input should equal just 'Hello World'" : null,
      success: value && /Hello World/.test(value) ? "Thanks for entering 'Hello World'!" : null
    })

    return(
      <Form
        onSubmit={this.props.submitLogin}
      >
        {formApi => (
          <form onSubmit={formApi.submitForm} id="form1">
            <label htmlFor="hello">Hello World</label>
            {/* <Text field="hello" id="hello" validate={validate} /> */}
            <Text field="email" id="email" />
            <Text field="password" id="password" />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </Form>
    )
  }
}

const mapStateToProps = function mapStateToProps(state, props) {
  return {};
};

function mapDispatchToProps(dispatch) {
  return Object.assign({},
    bindActionCreators(sessionActions, dispatch),
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);