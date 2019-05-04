import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DefaultImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${props =>
    typeof props.imgHeight === 'number'
      ? `${props.imgHeight}px`
      : props.imgHeight};
`;

class CarouselSlide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Img, imgUrl, imgHeight, description, attribution, ...props } = this.props;

    return (
      <figure {...props}>
        <Img src={imgUrl} imgHeight={imgHeight} />
        <figcaption>
          <strong>{description}</strong> {attribution}
        </figcaption>
      </figure>
    );
  }
}

CarouselSlide.propTypes = {
  Img: PropTypes.elementType,
  imgHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imgUrl: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  attribution: PropTypes.node,
};

CarouselSlide.defaultProps = {
  Img: DefaultImg,
  imgHeight: 500,
};

export default CarouselSlide;