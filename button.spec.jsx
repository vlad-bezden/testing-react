import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Button from './button'

test('renders with text', () => {
  const text = 'text'

  const renderer = TestUtils.createRenderer()
  renderer.render(<Button text={text} onClick={() => { }} />)
  const button = renderer.getRenderOutput()

  expect(button.type).toBe('button')
  expect(button.props.children).toBe(text)
})

test('fires the onClick callback', () => {
  const onClick = jest.fn()
  const text = 'test'

  const tree = TestUtils.renderIntoDocument(
    <Button text={text} onClick={onClick} />,
  )

  const button = TestUtils.findRenderedDOMComponentWithTag(
    tree,
    'button',
  )

  TestUtils.Simulate.click(button)

  expect(onClick).toBeCalled()
})
