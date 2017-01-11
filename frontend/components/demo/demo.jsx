import React from 'react';
import { withRouter } from 'react-router';

import SessionFormContainer from '../session_form/session_form_container';

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.demoUser;
  }

  componentDidMount() {
    this.props.login(this.state);
    this.props.router.replace('/');
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Demo;
