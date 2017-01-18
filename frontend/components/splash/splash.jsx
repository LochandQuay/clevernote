import React from 'react';
import { hashHistory } from 'react-router';
import Modal from 'react-modal';
import { SessionModalStyle } from '../modal_styles/session_modal_style';


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
          src="https://res.cloudinary.com/clevernote/image/upload/v1484173061/splash.jpg"
          className="splash-image" />
      </div>
    );
  }
}

export default Splash;
