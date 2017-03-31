import React from 'react'
import { shallow, mount } from 'enzyme'
import withData from '../with-data'
import getJSON from '../get-json'

const List = () => <div />

jest.mock('../get-json', () => {
  const data = 'data'
  return jest.fn(() => ({ then: callback => callback(data) }))
})

test('Should pass the props to the component', () => {
  const ListWithGists = withData()(List)
  const username = 'vlad-bezden'

  const wrapper = shallow(<ListWithGists username={username} />)

  expect(wrapper.prop('username')).toBe(username)
})

test('Should use string url', () => {
  const url = 'https://api/github.com/users/vlad-bezden/gists'
  const withGists = withData(url)
  const ListWithGists = withGists(List)

  mount(<ListWithGists />)

  expect(getJSON).toHaveBeenCalledWith(url)
})

test('Should use function url', () => {
  const url = jest.fn(props => (
    `https://api.github.com/users/${props.username}/gists`
  ))
  const withGists = withData(url)
  const ListWithGists = withGists(List)
  const props = { username: 'vlad-bezden' }

  mount(<ListWithGists {...props} />)

  expect(url).toHaveBeenCalledWith(props)
  expect(getJSON).toHaveBeenCalledWith('https://api.github.com/users/vlad-bezden/gists')
})

test('Should pass the data to the component', () => {
  const data = 'data'
  const ListWithGists = withData()(List)

  const wrapper = mount(<ListWithGists />)

  expect(wrapper.find(List).prop('data')).toEqual(data)
})