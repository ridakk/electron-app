import React from 'react';
import Settings from './settings';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Settings/>
      </div>
    )
  }
}

export default Home;
