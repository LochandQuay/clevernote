import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { image_url: null };
    // this.props.currentUser;
  }

  componentWillMount() {
    // FETCH CURRENT USER, SET STATE
  }

  render () {
    const userImageSetting = this.state.image_url ?
    "user-image" : "default-user-icon";

    const userImageContent = this.state.image_url ?
      (<img src={this.state.image_url} />) :
      (<i className="fa fa-user-o"></i>);

    return (
      <div><h2>Logo</h2>
        <ul className="sidebar-nav">
          <li className="icon-circle">
            <i className="fa fa-plus"></i>
          </li>
          <li className="icon-circle">
            <i className="fa fa-search"></i>
          </li>
        </ul>

        <ul className="sidebar-nav">
          <li className="icon-circle">
            <i className="fa fa-file-text"></i>
          </li>
          <li className="icon-circle">
            <i className="fa fa-book"></i>
          </li>
          <li className="icon-circle">
            <i className="fa fa-tags"></i>
          </li>
        </ul>

        <ul className="sidebar-nav">
          <li className={`user-icon ${userImageSetting}`}>
            {userImageContent}
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
