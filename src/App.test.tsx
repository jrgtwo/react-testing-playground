import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from './App'

test('demo', async () => {
  render(<App />)
  await screen.findByRole('heading')
  expect(screen.getByRole('heading')).toHaveTextContent('Vite')
})