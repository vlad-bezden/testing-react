import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'

import StatelessButton from '../src/components/StatelessButton'
import { noop } from './utils'

const text = 'test'

describe('StatelessButton', () => {
  it('should render as button', () => {
    const wrapper = shallow(
      <StatelessButton text={text} onClick={noop} />
    )
    // expect(wrapper.find(StatelessButton)).to.be.ok
    expect(wrapper.type()).to.be.equal('button')
  })

  it('should render with text', () => {
    const wrapper = shallow(
      <StatelessButton text={text} onClick={noop} />
    )
    // expect(wrapper.getNode().props.children).to.be.equal(text)
    expect(wrapper.text()).to.be.equal(text)
  })

  it('should fire callback event onClick event', () => {
    const onButtonClick = sinon.spy()
    const wrapper = shallow(
      <StatelessButton text={text} onClick={onButtonClick} />
    )
    wrapper.find('button').simulate('click')
    expect(onButtonClick).to.have.property('callCount', 1)
  })
})