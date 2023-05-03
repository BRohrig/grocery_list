import React from 'react';
import { shallow, mount } from 'enzyme';
import Grocery from './Grocery';

describe('Grocery', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Grocery 
        title='Bananas'
        quantity="7"
        purchased="false"
        starred="false"
        onStar={jest.fn()}
        onPurchase={jest.fn()}
        onDelete={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should have a className of "starred if is starred', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" starred={true} />
    );

    expect(wrapper.is('.starred')).toEqual(true);
  })

  it('should call the onPurchase prop when clicked', () => {
    const onPurchaseMock = jest.fn();

    const wrapper = mount(
      <Grocery
        name="Bananas"
        purchased={true}
        onPurchase={onPurchaseMock}
      />
    );

    wrapper.find('./Grocery-purchase').simulate('click');

    expect(onPurchaseMock).toBeCalled();
  })
});