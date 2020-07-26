import React from 'react'
import {configure, shallow} from 'enzyme'
import adapter from 'enzyme-adapter-react-16'
import Comment from './Comment'

configure({adapter: new adapter()});

describe('<Comment />', () => {
  it('should render comment correctly with given comment', () => {
    const comment = {
      name: "Amir",
      message: `So what the German ...`,
      time: "2 MINUTES AGO",
    };
    const wrapper = shallow(<Comment comment={comment} />);
    expect(wrapper).toMatchSnapshot();
  });
})


