import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <nav className="nav-group">
          <h5 className="nav-group-title">Favorites</h5>
          <a className="nav-group-item active">
            <span className="icon icon-home"></span>
            connors
          </a>
          <span className="nav-group-item">
            <span className="icon icon-download"></span>
            Downloads
          </span>
          <span className="nav-group-item">
            <span className="icon icon-folder"></span>
            Documents
          </span>
          <span className="nav-group-item">
            <span className="icon icon-signal"></span>
            AirPlay
          </span>
          <span className="nav-group-item">
            <span className="icon icon-print"></span>
            Applications
          </span>
          <span className="nav-group-item">
            <span className="icon icon-cloud"></span>
            Desktop
          </span>
        </nav>
      </div>
    )
  }
}

export default NavBar;
