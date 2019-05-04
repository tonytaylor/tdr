
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CarouselButton from './CarouselButton';
import CarouselSlide from './CarouselSlide';

class Carousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { slideIndex: 0 };

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrev() {
    const { slides } = this.props;
    let { slideIndex } = this.state;
    this.setState({ slideIndex: (slideIndex + slides.length - 1) % slides.length });
  }

  handleNext() {
    const { slides } = this.props;
    let { slideIndex } = this.state;
    this.setState({ slideIndex: (slideIndex + 1) % slides.length });
  }

  render() {
    const { defaultImgHeight, slides, ...rest } = this.props;
    const x = { content: 'Prev', 'data-action': 'prev' };
    const y = { content: 'Next', 'data-action': 'next' };

    return (
      <div {...rest}>
        <CarouselSlide
          imgHeight={defaultImgHeight}
          {...slides[this.state.slideIndex]} />
        <CarouselButton
          onClick={this.handlePrev}
          data-action={x['data-action']}
        >{x.content}</CarouselButton>
        <CarouselButton
          onClick={this.handleNext}
          data-action={y['data-action']}
        >{y.content}</CarouselButton>
      </div>
    );
  }
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes)).isRequired,
};

Carousel.defaultProps = {
  defaultImgHeight: CarouselSlide.defaultProps.imgHeight,
};

export default Carousel;