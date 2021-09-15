import React, { Component } from 'react';

import PageTitle from '../pageTitle';

class AccountInformation extends Component {
  render() {
    return (
      <div className="account-information">
        <PageTitle className='account-information__page-title' title='Account Information' />
      </div>
    )
  }
}


export default AccountInformation;