import * as React from 'react';
import './App.css';
import NavBar from './components/Nav';
import { LoginModal } from './components/Login';
import { RootState } from './redux/store';
import { connect } from 'react-redux';

// const logo = require('./logo.svg');

export const enum HTML_IDS {
  login_username = 'loginField',
  login_password = 'passwordField',
  login_retype_password = 'retypePasswordField'
}



class App extends React.Component<{ loginModal: { active: boolean } }> {
  render() {
    return (
      <div className="App">
        <LoginModal
          show={this.props.loginModal.active}
        />
        <NavBar />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  // const { loginModal } = state;
  return {
    loginModal: {
      active: state.loginModal.active
    }
  };
}

export default connect(mapStateToProps)(App);


