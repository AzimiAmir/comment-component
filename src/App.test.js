import React from 'react'
import CommentList from './components/CommentList'
import {configure, shallow} from 'enzyme'
import adapter from 'enzyme-adapter-react-16'
import App from './App';

configure({adapter: new adapter()})


describe('<App/>', () => {
  const comments = [
    {
      name: "Amir",
      message: `So what the German automaker is likely to focus on today is the bigger picture.This will be the first time we see the Taycan free from any prototype`,
      time: "2 MINUTES AGO",
    }
  ]
  it('Should check if the App component contains CommentList component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.contains(<CommentList comments={comments}/>)).toEqual(true)
  })
})


