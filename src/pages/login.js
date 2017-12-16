import React from 'react';
import './styles/login.css';


export default class login extends React.Component {
  constructor() {
    super();
    this.state = {
      btnName: 'Submit'
    };
  }

  handleSubmitBtn = () => {
    this.setState({
      btnName: 'Submitting...'
    });
  }
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col s3"></div>
            <div className="col s6">
              <div className="card login-wrapper">
                <div className="card-content">
                  <h2>Welcome to Prosperna Admin</h2>
                  <label>Username</label>
                  <input type="text" id="username" className="form-control"/>
                  <label>Password</label>
                  <input type="password" id="password" className="form-control"/>
                  <button className="btn btn-success login-submit-btn" onClick={this.handleSubmitBtn}>{this.state.btnName}</button>
                </div>
              </div>
            </div>
            <div className="col s3"></div>
          </div>
      </div>
    );
  }
}
