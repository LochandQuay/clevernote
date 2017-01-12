import React from 'react';

class Sidebar extends React.Component {
  render () {
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

        <div className="user-image">
          <i className="fa fa-user-circle"></i>
        </div>
      </div>
    );
  }
}

export default Sidebar;
