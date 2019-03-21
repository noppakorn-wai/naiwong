import React from 'react'
import { render } from 'react-testing-library'
import Home, { translateStatusCode } from 'www/pages/home'

describe('Home Page', () => {
  it('Can translate status code to string', () => {
    expect(translateStatusCode(200)).toBe('healthy')
    expect(translateStatusCode(500)).toBe('unhealthy')
  })

  it('Shows "Hello world!"', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Hello World!')).not.toBeNull()
  })
})
