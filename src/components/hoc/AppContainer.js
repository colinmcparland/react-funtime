import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center p-5">
          <div className="col-auto">
            <Button 
              variant='contained'
              size='large'
              color='primary'
            >
              Connect Bank Account!??!?!
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default AppContainer;