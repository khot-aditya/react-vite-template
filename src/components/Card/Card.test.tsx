import { render, screen } from '~/utils/tests'

import { Card } from '.'

describe('<Card />', () => {
  it('renders', () => {
    render(<Card prop="card" />)

    expect(screen.getByRole('heading', { name: /card/i })).toBeInTheDocument()
  })
})
