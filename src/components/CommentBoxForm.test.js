import React from 'react'
import {configure, mount} from 'enzyme'
import adapter from 'enzyme-adapter-react-16'
import CommentBoxForm from './CommentBoxForm'

configure({adapter: new adapter()})

describe('<CommentBoxForm />', () => {
  it('should be possible to activate button with click', () => {
    const wrapper = mount(<CommentBoxForm />);
    wrapper
      .find('button.Form_Button')
      .simulate('click');
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
})


