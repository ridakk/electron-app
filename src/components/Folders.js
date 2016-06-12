import React from 'react';
import Folder from './folder';

class Folders extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
      console.log('folder change event', event)
  }

  render() {
    let self =this;
    return (
      <div>
        {
          this.props.value.map(function(value, index, attendees) {
            return <Folder key={index} path={value.path} onChange={self.onChange} disabled={value.active}/>
          })
        }
      </div>
    )
  }
}

export default Folders;
