import React, { Component, PropTypes } from 'react';

class CompanyRole extends Component {
	static propTypes = {
		role: PropTypes.string
	}

  render() {
    return (
			<div>
				<span className="home__company-details__title">Role</span>
				<span className="home__company-details__subtitle">{this.props.children}</span>
			</div>
    );
  }
}

export default CompanyRole;
