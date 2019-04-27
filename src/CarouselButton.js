import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CarouselButton extends Component {
  constructor(props) {
    super(props);
    this.propTypes = { children: PropTypes.node.isRequired };
  }

  render() {
    return (
      <button {...this.props} />
    );
  }
}