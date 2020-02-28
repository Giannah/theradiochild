import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

let app

describe('App', () => {
  beforeEach(() => {
    app = shallow(<App />)
    app.instance()
  })

  it('renders correctly', () => {
    expect(app).toBeDefined()
    expect(app).toMatchSnapshot()
  })
})
