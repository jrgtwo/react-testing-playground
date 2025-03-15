import { screen, render } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from './App'

describe('App Tests', () => {
  beforeEach(() => {
    render(<App />)
  })
 
  it('demo', async () => {
    await screen.findByRole('heading')
    expect(screen.getByRole('heading')).toHaveTextContent('Vite')
  })

  it('should contain an increment button', async () => {
   const boom = await screen.findByRole('button', {name: /increment-btn/i } )
    expect(boom).toBeDefined()
  })
})


