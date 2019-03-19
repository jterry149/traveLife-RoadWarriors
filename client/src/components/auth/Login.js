// Required Dependencies
import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Required Files
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";



class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // ComponentDidMount function
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  // ComponentWillReceiveProps function
  comonentWillReceiveProps(nextProps) {
    // Push the props to the dashboard
    if (nextProps.auth.isAuthenicated) {
      this.props.history.push("/dashboard");
    }

    // Handle the errors of the props
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  // Event handler for onSubmit
  onSubmit(e) {
    e.preventDefault();

    // Variable object for the user
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);

    // Show user data for testing
    console.log(userData);
  }
  // Event handler for onChange
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // // Open model
  // openOtherModal = () => {
  //   this.props.toggleOtherModal();
  //   this.props.toggle();
  // };

  render() {
    // Object state to handle errors
    const { errors } = this.state;
    return (
      <MDBContainer className="login">
        <h1 className="text-center"><strong>Sign In</strong></h1>
        <h3 className="text-center"><strong>To Your TraveLife Road Warriors</strong></h3>
        <MDBRow>
          <MDBCol>
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Email Address"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              />

              <TextFieldGroup
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
              />

                <input
                    type="submit"
                    className="btn blue-gradient btn-info btn-block btn-rounded z-depth-1a"
                />

            </form>
            <div className="text-center mb-3">
              <p className="font-small grey-text d-flex justify-content-end">
                <a href="!#" className="blue-text ml-1">
                  Forgot Password?
                </a>
              </p>
            </div>
            <div className="font-small grey-text d-flex justify-content-end">
            Not a member? 
              <p><a href="/register">
                Sign Up
              </a></p>
            </div>
          </MDBCol>
          </MDBRow>
          </MDBContainer>
    );
  }
}
        
// Set up object PropsTypes for the Login
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

// Build our mapStateToProps
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

// Export the Login
export default connect(mapStateToProps, { loginUser })(Login);
