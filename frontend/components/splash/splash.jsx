import React from 'react';
import { hashHistory } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.loggedIn) {
      hashHistory.push("/home");
    }
  }

  demoLogin(e) {
    e.preventDefault();
    const user = { username: "eevee", password: "password" };
    this.props.login(user);
  }

  render() {
    return (
      <div className="splash group">
        <img
          src="http://res.cloudinary.com/clevernote/image/upload/q_70/v1489622273/aleks-dorohovich-26_uerxji.jpg"
          className="splash-image" />

        <div className="splash-signup-form">
          <h1>Stay organized.</h1><br />

          <br /><br />

          <button
            className="splash-submit-button"
            onClick={ this.demoLogin }>Try the demo</button>
        </div>
      </div>
    );
  }
}

export default Splash;
