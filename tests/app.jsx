jest.mock('socket.io-client', () => {
  return jest.fn(() => {
    return {
      // eslint-disable-next-line no-empty-function
      on: jest.fn(() => {}),
    }
  })
})

import App from '../lib/app'
import React from 'react'
import renderer from 'react-test-renderer'

test('should check default app structure', () => {
  const app = renderer.create(
    <App/>
  )

  const tree = app.toJSON()
  expect(tree).toMatchSnapshot()
})
