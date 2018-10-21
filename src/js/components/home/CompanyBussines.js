import React, { Component, PropTypes } from 'react';

class CompanyBussines extends Component {
	static propTypes = {
		description: PropTypes.string
	}

  render() {
    return (
			<div>
				<span className="home__company-details__title">Bussines</span>
				<span className="home__company-details__subtitle">{this.props.children}</span>
			</div>
    );
  }
}

export default CompanyBussines;
