/**
*
* Login
*
*/

import React from 'react';
import styles from './styles.css';
import validator from 'email-validator';
// import classNames from 'classnames';
import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    login: React.PropTypes.func.isRequired,
    loginFacebook: React.PropTypes.func.isRequired,
  };

  state = {};

  login = () => {
    const email = this.emailField.value;
    const pass = this.passwordField.value;
    if (!validator.validate(email)) {
      this.setState({
        errorEmailText: 'Please provide a valid email',
      });
      return;
    } else if (!pass) {
      this.setState({
        errorPasswordText: 'Please provide a password',
      });
    }
    this.setState({
      errorEmailText: null,
      errorPasswordText: null,
    });

    this.props.login(email, '');
  }

  responseFacebook = (response) => {
    this.props.loginFacebook(response);
  }

  responseGoogle = (response) => {
    this.props.loginFacebook(response);
  }

  // FB test: 503134626770474
  // FB prod: 2536100859948701
  render() {
    return (
      <div className={styles.login}>
        <div className={styles.heading}>
          Login.
        </div>

        <div className={styles.actionContainer}>

          <FacebookLogin
            appId="2536100859948701"
            autoLoad
            fields="name,email,picture"
            callback={this.responseFacebook}
          />


        </div>
      </div>
    );
  }


  /*

  render() {
    const fieldEmailError = this.state.errorEmailText ? (<div className={styles.errorMessage}> {this.state.errorEmailText} </div>) : null;
    const fieldPasswordError = this.state.errorEmailText ? (<div className={styles.errorMessage}> {this.state.errorEmailText} </div>) : null;
    return (
      <div className={styles.login}>
        <div className={styles.heading}>
          login with your email.
        </div>
        <input className={classNames(styles.input, { [styles.inputError]: this.state.errorEmailText })} placeholder="Your Email" ref={(f) => { this.emailField = f; }} />
        {fieldEmailError}
        <input className={classNames(styles.input, { [styles.inputError]: this.state.errorPasswordText })} placeholder="Your Password" ref={(f) => { this.passwordField = f; }} />
        {fieldPasswordError}
        <div className={styles.actionContainer}>
          <div className={styles.button}> Cancel </div>
          <div className={styles.button} onClick={this.login}> Log in </div>
          <FacebookLogin
            appId="2536100859948701"
            autoLoad
            fields="name,email,picture"
            callback={this.responseFacebook}
          />
          <GoogleLogin
            clientId="916427182233-ubicgqiu59uf9stu2ndsn6u2bbptrn8k.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseFacebook}
            onFailure={this.responseFacebook}
          />
        </div>
      </div>
    );
  }
  */
}

export default Login;
