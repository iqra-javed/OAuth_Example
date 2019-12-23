import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: blueviolet;
  color: white;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 3px 3px #808080;
`;

class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '718766438817-hmn6usoh97v1s7oud88kdrm17e022trj.apps.googleusercontent.com',
          scope: 'email'
          // init returns a promise
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange)
        });
    });
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get() })
  }

  onSignIn = () => {
    this.auth.signIn()
  }

  onSignOut = () => {
    this.auth.signOut()
  }

  // helper function
  renderAuthButton() {
    const { isSignedIn } = this.state;
    if (isSignedIn) {
      return <Button onClick={this.onSignOut}>Log Out</Button>;
    } else {
      return <Button onClick={this.onSignIn}>Log In</Button>;
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

export default GoogleAuth;
