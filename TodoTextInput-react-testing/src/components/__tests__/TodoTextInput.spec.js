import React from 'react'
import { shallow } from 'enzyme'
import TodoTextInput from '../TodoTextInput'

const noop = () => { }

test('Should set the text prop as value', () => {
  const text = 'test'
  const wrapper = shallow(
    <TodoTextInput text={text} onSave={noop} />
  )

  expect(wrapper.prop('value')).toBe(text)
})

test('Should use the placeholder property', () => {
  const placeholder = 'placeholder'
  const wrapper = shallow(
    <TodoTextInput placeholder={placeholder} onSave={noop} />
  )

  expect(wrapper.prop('placeholder')).toBe(placeholder)
})

test('Should apply right class names', () => {
  const wrapper = shallow(
    <TodoTextInput editing newTodo onSave={noop} />
  )

  expect(wrapper.hasClass('edit new-todo')).toBe(true)
})

test('Should fire onSave on enter', () => {
  const onSave = jest.fn()
  const value = 'test'
  const wrapper = shallow(<TodoTextInput onSave={onSave} />)

  wrapper.simulate('keydown', { target: { value }, which: 13 })

  expect(onSave).toHaveBeenCalledWith(value)
})

test('Should not fire onSave on key down', () => {
  const onSave = jest.fn()
  const wrapper = shallow(<TodoTextInput onSave={onSave} />)

  wrapper.simulate('keydown', { target: { value: '' } })

  expect(onSave).not.toBeCalled()
})

test('Should clear the value after save if new', () => {
  const value = 'test'
  const wrapper = shallow(<TodoTextInput newTodo onSave={noop} />)

  wrapper.simulate('keydown', { target: { value }, which: 13 })

  expect(wrapper.prop('value')).toBe('')
})

test('Should update the text on change', () => {
  const value = 'test'
  const wrapper = shallow(<TodoTextInput onSave={noop} />)

  wrapper.simulate('change', { target: { value } })

  expect(wrapper.prop('value')).toBe(value)
})

test('Should fire onSave on blur if not new', () => {
  const onSave = jest.fn()
  const value = 'test'
  const wrapper = shallow(<TodoTextInput onSave={onSave} />)

  wrapper.simulate('blur', { target: { value } })

  expect(onSave).toHaveBeenCalledWith(value)
})

test('Should not fire onSave on blur if new', () => {
  const onSave = jest.fn()
  const wrapper = shallow(<TodoTextInput newTodo onSave={onSave} />)

  wrapper.simulate('blur')

  expect(onSave).not.toBeCalled()
})