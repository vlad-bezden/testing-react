import React from 'react'
import { shallow } from 'enzyme'
import Controlled from '../Controlled'
import Page from '../../Page'

test('Should submit the form', () => {
  const onSubmit = jest.fn()
  const wrapper = shallow(<Controlled onSubmit={onSubmit} />)

  const firstName = wrapper.find('[name="firstName"]')
  firstName.simulate('change', {target: {name: 'firstName', value: 'Albert'}})

  const lastName = wrapper.find('[name="lastName"]')
  lastName.simulate('change', {target: {name: 'lastName', value: 'Einstein'}})

  const form = wrapper.find('form')
  form.simulate('submit', {preventDefault: () => {}})

  expect(onSubmit).toHaveBeenCalledWith('Albert Einstein')
})