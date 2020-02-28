import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

let header

describe('Header', () => {
  beforeEach(() => {
    header = shallow(<Header />)
    header.instance()
  })

  it('renders correctly', () => {
    expect(header).toBeDefined()
    expect(header).toMatchSnapshot()
  })

  it('has 2 sections', () => {
    expect(header.children()).toHaveLength(2)
  })
})
