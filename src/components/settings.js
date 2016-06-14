import React from 'react';
import Folders from './folders';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.onAddClick = this.onAddClick.bind(this);
    this.state = {
      folders: [{
        path: '',
        new: true,
        active: false
      }]
    };
  }

  onAddClick(){
    let folders = this.state.folders;

    folders.push({
      path: ''
    });
    this.setState({
      folders: folders
    });
  }

  render() {
    return (
      <div>
        <form>
          <div >
            <Folders value={this.state.folders}/>
          </div>
        </form>
      </div>
    )
  }
}

export default Settings;
