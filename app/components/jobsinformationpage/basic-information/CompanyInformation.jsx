import React, { createClass } from 'react';

const CompanyInformation = createClass({
  displayName: 'CompanyInformation',

  render() {
    const {
      companyname,
      companyaddress,
      positionname,
      createdat
    } = this.props;

    return (
      <div>
        <div className='basic-heading'>
          <div className="company-details">
            <h4>{companyname}</h4>
          </div>
          <div className="offer-details" >
            <h4>{positionname}</h4>
          </div>
          <div className="creation-date">
            <h4>Creation Date</h4>
          </div>
        </div>
        <div className='basic-information'>
          <div className="company-info">
            <p>{companyaddress}</p>
          </div>
          <div className="offer-info" >
          </div>
          <div className="creation-info">
            <p>{createdat}</p>
          </div>
        </div>
      </div>
    );
  }
});

export default CompanyInformation;
