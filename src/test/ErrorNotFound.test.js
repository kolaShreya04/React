import { render, screen } from '@testing-library/react';
import ErrorNotFound from '../components/ErrorNotFound';

jest.mock('react-router-dom', () => ({
    useRouteError: jest.fn()
}))

test('renders errorNotFound', () => {
    const increment = jest.fn();
  render(<ErrorNotFound count={25} increment={increment}/>);
  const linkElement = screen.getByText(/Sorry, an unexpected error has occurred./i);
  expect(linkElement).toBeInTheDocument();
});