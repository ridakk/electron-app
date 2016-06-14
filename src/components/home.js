import React from 'react';
import Settings from './settings';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container-fluid">
        <Settings/>
      </div>
    )
  }
}

export default Home;
