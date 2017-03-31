import React from 'react'
import renderer from 'react-test-renderer'
import TodoTextInput from '../TodoTextInput'

const noop = () => { }

test('Should create component', () => {
  const component = renderer.create(
    <TodoTextInput onSave={noop} />
  )

  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})