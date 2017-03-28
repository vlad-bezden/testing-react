import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Button from './StatelessFunctionComponent'
import Wrapper from './Wrapper'
import utils from './utils'

test('renders with text', () => {
  const text = 'text'

  const renderer = TestUtils.createRenderer()
  renderer.render(<Button text={text} onClick={utils.nil} />)
  const button = renderer.getRenderOutput()

  expect(button.type).toBe('button')
  expect(button.props.children).toBe(text)
})

/**
 * Example how to test stateless functional components
 */
test('fires the onClick callback', () => {
  const onClick = jest.fn()
  const text = 'test'

  const tree = TestUtils.renderIntoDocument(
    <Wrapper>
      <Button text={text} onClick={onClick} />
    </Wrapper>
  )

  const button = TestUtils.findRenderedDOMComponentWithTag(
    tree,
    'button'
  )

  TestUtils.Simulate.click(button)

  expect(onClick).toBeCalled()
})