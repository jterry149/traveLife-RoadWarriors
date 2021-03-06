import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
// Required Files
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

import Logo from '../../images/logo_combo_small.png';

class Navbar extends Component {

    state = {
      collapse: false,
      // loginModal:false,
      // signupModal:false
    }
  
 
  // // Model login
  // toggleLoginModal = () => {
  //   this.setState({
  //     loginModal: !this.state.loginModal
  //   });
  // };

  // // model signup
  // toggleSignupModal = () => {
  //   this.setState({
  //     signupModal: !this.state.signupModal
  //   });
  // };

  // onCLick function
  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  // Event function to handle logout
  onLogoutClick(event) {
    event.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  // collapse toggle
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    // Object to check if user is authenticated
    const { isAuthenticated, user } = this.props.auth;
    
    // Authenticated Links
    const authLinks = (
      <MDBNavbarNav>
        <MDBNavItem >
          <MDBNavLink to="/feed">
            Post Feed
        </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem >
          <MDBNavLink to="/dashboard">
            Profile Dashboard
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem >
          <a
            href=" "
            onClick={this.onLogoutClick.bind(this)}
            className={MDBNavLink}
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
            Logout
          </a>
        </MDBNavItem>
      </MDBNavbarNav>
    );
    // Guest user links
    const guestLinks = (
      
      <MDBNavbarNav>
        <MDBNavItem >
          <MDBNavLink to="/register">Sign-up</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>  
          <MDBNavLink to="/login">Login</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    );

    // Return Navbar
    return (   
          
          <Router>
            <MDBNavbar color="indigo darken-4" dark expand="md" fixed="top">
              <MDBNavbarBrand className="logo" href="/">
                <img src={Logo} alt="logo" />
              </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="/home">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/about">About</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/map">Journey</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/news">News</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/resources">Resources</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/profiles">{' '}Community
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                  {isAuthenticated ? authLinks : guestLinks}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
    );
  }
}


// Proptypes for the Navbar
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

// The state of the props
const mapStateProps = state => ({
  auth: state.auth
});
export default connect(mapStateProps, { logoutUser, clearCurrentProfile })(Navbar);

