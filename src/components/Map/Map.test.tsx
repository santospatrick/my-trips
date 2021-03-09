import { render, screen } from '@testing-library/react'
import Map from './Map'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i,
      })
    ).toBeInTheDocument()
  })

  it('should render with the market in correct place', () => {
    const place = {
      id: '1',
      name: 'Curitiba',
      slug: 'curitiba',
      location: {
        latitude: 0,
        longitude: 0,
      },
    }

    const place2 = {
      id: '2',
      name: 'São Paulo',
      slug: 'sao-paulo',
      location: {
        latitude: 10,
        longitude: 10,
      },
    }

    render(<Map places={[place, place2]} />)

    expect(screen.getByTitle(/curitiba/i)).toBeInTheDocument()
    expect(screen.getByTitle(/são paulo/i)).toBeInTheDocument()
  })
})
