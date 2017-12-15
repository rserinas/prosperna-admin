import React from 'react';
import './styles/login.css';


export default class login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleSubmitBtn () {

  }
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card login-wrapper">
                <div className="card-body">
                  <h2>Welcome to Prosperna Admin</h2>
                  <label>Username</label>
                  <input type="text" id="username" className="form-control"/>
                  <label>Password</label>
                  <input type="password" id="password" className="form-control"/>
                  <button className="btn btn-success login-submit-btn" onClick={this.handleSubmitBtn}>Submit</button>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
      </div>
    );
  }
}
