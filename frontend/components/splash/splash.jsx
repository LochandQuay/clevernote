import React from 'react';
import { hashHistory } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    if (props.loggedIn) {
      hashHistory.push("/home");
    }
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
            className="splash-submit-button">Sign up for free</button>
        </div>
      </div>
    );
  }
}

export default Splash;
