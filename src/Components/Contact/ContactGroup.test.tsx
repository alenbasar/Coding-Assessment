import React from 'react';
import { fireEvent, render, screen, waitFor } from './test-utils';
import '@testing-library/jest-dom';
import ContactsBrowser from './ContactsBrowser';
import * as api from '../../api';
import { groupBy, searchContacts } from '../../utils';

jest.mock('../../api', () => ({
  fetchContacts: jest.fn(),
}));

jest.mock('../../utils', () => ({
  groupBy: jest.fn(),
  searchContacts: jest.fn(),
}));

const mockContacts = [
  { id: 1, firstName: 'John', lastName: 'Doe', status: 'Attended' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', status: 'Absent' },
];

describe('ContactsBrowser', () => {
  beforeEach(() => {
    (api.fetchContacts as jest.Mock).mockResolvedValue({
      json: () => Promise.resolve({ contacts: mockContacts }),
      ok: true,
      status: 200,
    } as Response);
    (groupBy as jest.Mock).mockReturnValue({
      Attended: [mockContacts[0]],
      Absent: [mockContacts[1]],
    });
    (searchContacts as jest.Mock).mockImplementation((contacts) => contacts);
  });

  it('renders contact groups', async () => {
    render(<ContactsBrowser titleBy="status" />);
    await waitFor(() => {
      expect(screen.getByText('Attended')).toBeInTheDocument();
      expect(screen.getByText('Absent')).toBeInTheDocument();
    });
  });

  it('filters contacts on search', async () => {
    render(<ContactsBrowser titleBy="status" />);
    const searchInput = screen.getByPlaceholderText('Search contacts...');
    fireEvent.change(searchInput, { target: { value: 'John' } });
    await waitFor(() => {
      expect(searchContacts).toHaveBeenCalledWith(mockContacts, 'John');
    });
  });

  it('displays error on fetch fail', async () => {
    (api.fetchContacts as jest.Mock).mockRejectedValue(
      new Error('Failed to fetch')
    );
    render(<ContactsBrowser titleBy="status" />);
    await waitFor(() => {
      expect(screen.getByText('Failed to fetch contacts')).toBeInTheDocument();
    });
  });
});
