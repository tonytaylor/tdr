
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarouselSlide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imgUrl, description, attribution, ...props} = this.props;

    return (
      <figure {...props}>
        <img src={imgUrl} />
        <figcaption>
          <strong>{description}</strong> {attribution}
        </figcaption>
      </figure>
    );
  }
}

CarouselSlide.propTypes = {
  imgUrl: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  attribution: PropTypes.node,
};

export default CarouselSlide;