import React from 'react';
import Folders from './folders';

//const fs = require('fs');

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

    //if (!fs.existsSync(dir)){
//fs.mkdirSync(dir);
//}

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
          <div >
            <button type="submit" className="btn btn-form btn-default" onClick={this.onAddClick}>Add</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Settings;
