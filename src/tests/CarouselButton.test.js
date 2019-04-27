import React from 'react';
import { shallow } from 'enzyme';
import CarouselButton from '../CarouselButton';


describe('CarouselButton', () => {
  const txt = 'Button text';
  let wrapper;

  beforeEach(() => {
    wrapper = wrapper = shallow(<CarouselButton children={txt} />);
  });

  it('renders a <button>', () => {
    expect(wrapper.type()).toBe('button');
  });

  it('passes `children` through to the <button>', () => {
    expect(wrapper.prop('children')).toBe(txt);
  });

  it('passes other props through to the button', () => {
    const onClick = () => {};
    const className = 'my-carousel-button';
    const dataAction = 'prev';
    wrapper.setProps({ onClick, className, 'data-action': dataAction });

    expect(wrapper.prop('onClick')).toBe(onClick);
    expect(wrapper.prop('className')).toBe(className);
    expect(wrapper.prop('data-action')).toBe(dataAction);
  });
});