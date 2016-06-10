import React from 'react';
import NavBar from './navBar';
import Settings from './settings';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="window">
        <div className="window-content">
          <div className="pane-group">
            <div className="pane-sm sidebar">
              <NavBar/>
            </div>
            <div className="pane">
              <Settings/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
