import React from 'react';

describe('JSX', () => {
  it('calls React.createElement', () => {
    const createElementSpy = jest.spyOn(React, 'createElement');
    <h1>hello, JSX!</h1>;
    expect(createElementSpy).toHaveBeenCalledWith('h1', null, 'hello, JSX!');
  })
})