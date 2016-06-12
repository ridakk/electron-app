import React from 'react';

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
      <div>
        <input type="text" className="form-control" placeholder="Log file location" disabled={this.props.disabled} defaultValue={this.props.path} onChange={this.onChange}></input>
        <button type="submit" className="btn btn-form btn-default pull-right" onClick={this.onAddClick}>Add</button>

        <div class="row">
          <div class="col-lg-6">
            <div class="input-group">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">Go!</button>
              </span>
              <input type="text" class="form-control" placeholder="Search for...">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default Folder;
