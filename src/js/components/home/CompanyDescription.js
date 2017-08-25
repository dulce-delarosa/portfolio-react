import React, { Component, PropTypes } from 'react';

class CompanyDescription extends Component {
	static propTypes = {
		description: PropTypes.string
	}

  render() {
    return (
			<span className="home__company__description">{this.props.children}</span>
    );
  }
}

export default CompanyDescription;
