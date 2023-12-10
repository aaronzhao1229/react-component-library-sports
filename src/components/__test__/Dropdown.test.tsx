import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import Dropdown from '../Dropdown'
import { useAppDispatch } from '../../hooks/hooks'
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

const fakeDispatch = jest.fn()
jest.mock('../../hooks/hooks', () => ({
  useAppDispatch: () => fakeDispatch,
}));

beforeEach(() => {
  localStorage.clear();
});

describe('Dropdown component', () => {
  it("Renders component with options", () => {
    render(<Dropdown orderBy='' setOrderBy={() => jest.fn()}/>)
    expect(screen.getByLabelText(/Select an option/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Order by/i)).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(3)
    expect(screen.getAllByRole('option')[1]).toHaveTextContent(/A - Z of name/i)
  })

  it("Choose Z-A and Z-A will display on the screen and dispatch has been called", async () => {
    render(<Dropdown orderBy='' setOrderBy={() => jest.fn()}/>)
    await userEvent.selectOptions(screen.getByLabelText(/Select an option/i), 'Z - A of name')
    
    expect(screen.getByDisplayValue(/Z - A of name/i)).toBeInTheDocument();
    expect(fakeDispatch).toHaveBeenCalled();
  })
})

