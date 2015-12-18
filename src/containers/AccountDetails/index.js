import React, { Component } from 'react';
import { connect } from 'react-redux';

import { PromoteLink } from 'containers/PromoteLink';
import { ReferredUsers } from 'containers/ReferredUsers';
// import { Withdrawals } from 'containers/Withdrawals';

let Withdrawals = ReferredUsers;

import styles from './styles';

export const AccountDetails = connect()(
  () => (
    <section className={`${styles}`}>
      <div className="container">
        <div className="side">
          <PromoteLink/>
          <ReferredUsers/>
        </div>
        <div className="content">
          <Withdrawals/>
        </div>
      </div>
    </section>
  )
);