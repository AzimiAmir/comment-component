import React from 'react';
import CommentList from './CommentList';
import Comment from './Comment';
import {configure, shallow} from 'enzyme';
import adapter from 'enzyme-adapter-react-16';

configure({adapter: new adapter()});


describe('<CommentList/>', () => {
  it('Should render n times Comment component where n is equal to number of posted comments', () => {
    const comments = [
      {
        name: "Amir",
        message: `So what the German ...`,
        time: "2 MINUTES AGO",
      },
      {
        name: "Mark",
        message: `So what the Canadian ... `,
        time: "1 MINUTE AGO",
      }
    ];
    const wrapper = shallow(<CommentList comments={comments}/>);
    expect(wrapper.find(Comment)).toHaveLength(2);
  })
});