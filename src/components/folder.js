import React from 'react';

var fs = require('fs');

console.log("file system is: ", fs)

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..."/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
    )
  }
}

export default Folder;
