import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './styles/dashboard.css';

export default class dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      noDataText: 'No results found'
    };
    this.products = [
      {
        user: '1',
        email: 'rserinas@xtendly.com',
        created_date: '2017-23-12',
        ending_date: '2017-23-12',
        status: 'Active',
        last_login: '2017-23-12'
      },
      {
        user: '2',
        email: 'rserinas@xtendly.com',
        created_date: '2017-23-12',
        ending_date: '2017-23-12',
        status: 'Active',
        last_login: '2017-23-12'
      }
    ]
  }
  render() {
    return (
      <div className="dashboard">
        <nav>
          <div className="nav-wrapper blue lighten-1">
            <ul className="right hide-on-med-and-down">
                <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
              </ul>
          </div>
        </nav>
        <div className="tab-wrapper">
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s3"><a className="active" href="#free-trial-tab">Free Trial</a></li>
                <li className="tab col s3"><a href="#pending-transactions-tab">Pending Transactions</a></li>
              </ul>
            </div>
            <div className="tab-content">
              <div id="free-trial-tab" className="col s12">
                <div className="free-trial-table-wrapper">
                  <BootstrapTable data={ this.products } options={ this.options } >
                    <TableHeaderColumn dataField='user' isKey>User</TableHeaderColumn>
                    <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
                    <TableHeaderColumn dataField='created_date'>Created Date</TableHeaderColumn>
                    <TableHeaderColumn dataField='ending_date'>Ending Date</TableHeaderColumn>
                    <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                    <TableHeaderColumn dataField='last_login'>Last Login</TableHeaderColumn>
                  </BootstrapTable>
                </div>
              </div>
              <div id="pending-transactions-tab" className="col s12">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
