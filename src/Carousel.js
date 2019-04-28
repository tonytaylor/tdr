
import React, { PureComponent } from 'react';
import CarouselButton from './CarouselButton';
import CarouselSlide from './CarouselSlide';

export default class Carousel extends PureComponent {
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
    const { slides, ...props } = this.props;
    const x = { content: 'Prev', 'data-action': 'prev', };
    const y = { content: 'Next', 'data-action': 'next', };

    return (
      <div {...props}>
        <CarouselSlide {...slides[this.state.slideIndex]} />
        <CarouselButton 
          onClick={this.handlePrev}
          data-action={x['data-action']}
          children={x.content} />
        <CarouselButton
          onClick={this.handleNext} 
          data-action={y['data-action']}
          children={y.content} />
      </div>
    );
  }
}