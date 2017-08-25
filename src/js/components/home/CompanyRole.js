import React, { Component, PropTypes } from 'react';

class CompanyRole extends Component {
	static propTypes = {
		role: PropTypes.string
	}

  render() {
    return (
			<span className="home__company__role">{this.props.children}</span>
    );
  }
}

export default CompanyRole;
