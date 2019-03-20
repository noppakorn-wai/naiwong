import rootHandeler from '../index'

test('test simple response from root hand', async () => {
  expect(await rootHandeler()).toBe('Hello World!')
})
