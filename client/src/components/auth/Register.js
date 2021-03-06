// Required Dependencies
import React, { Component } from "react";
import { MDBContainer, MDBRow,MDBCol} from 'mdbreact';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Required files
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import "./styles.css";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        // Bind the change
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push('/dashboard');
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
    }
    
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    
    onSubmit(event) {
        event.preventDefault();
        
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
    
        this.props.registerUser(newUser, this.props.history);
    }

    render() {
    const { errors } = this.state;
    return (
    <MDBContainer className="register">
        <MDBRow>
            <MDBCol>
                <h1 className="text-center"><strong>Sign-up </strong></h1>
                <h3 className="text-center"><strong>For A TraveLife Road Warriors account</strong></h3>
            <form noValidate onSubmit={this.onSubmit}>
                    <TextFieldGroup
                    placeholder="Name"
                    name="name"
                    type="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                />
                <TextFieldGroup
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                    info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                />
                <TextFieldGroup
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                />
                <TextFieldGroup
                    placeholder="Confirm Password"
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.onChange}
                    error={errors.password2}
                />
              
                <input
                    type="submit"
                    className="btn blue-gradient btn-info btn-block btn-rounded z-depth-1a"
                />

            </form>
                <div className="font-small grey-text d-flex justify-content-end">
                    Have an account?<a href="/login"><p className="blue-text ml-1 font-weight-bold"> Sign In</p></a>
                </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        );
    };
};

// Set the props object
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
 
// Map the props to state
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

// Export the signup
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
