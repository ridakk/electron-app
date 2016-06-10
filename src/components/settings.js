import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>
          <select className="form-control">
            <option>Option one</option>
            <option>Option two</option>
            <option>Option three</option>
            <option>Option four</option>
            <option>Option five</option>
            <option>Option six</option>
            <option>Option seven</option>
            <option>Option eight</option>
          </select>
          <div className="form-actions">
            <button type="submit" className="btn btn-form btn-default">Cancel</button>
            <button type="submit" className="btn btn-form btn-primary">OK</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Settings;
