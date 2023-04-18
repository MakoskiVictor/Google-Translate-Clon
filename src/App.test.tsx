import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '@/App'

test('All works well', async () => {
  const app = render(<App/>)

  const user = userEvent.setup()
  const textareaFrom = app.getByDisplayValue('Enter text')

  await user.type(textareaFrom, 'Hola mundo')
  const result = await app.findByDisplayValue(/Hello world/i, {}, { timeout: 5000 })

  expect(result).toBeTruthy()
})
