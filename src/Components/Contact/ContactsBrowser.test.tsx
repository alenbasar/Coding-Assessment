import React from 'react';
import { render, screen, waitFor } from './test-utils'; // Import waitFor
import '@testing-library/jest-dom';
import ContactGroup from './ContactGroup';

const mockContacts = [
  {
    id: 1,
    firstName: 'Dianne',
    lastName: 'Russell',
    email: 'jane@hotmail.com',
    status: 'Attended',
    avatarUrl: '/api/avatar/dianne_russell.png',
  },
];

describe('ContactGroup', () => {
  it('renders the title and a contact', async () => {
    render(<ContactGroup title="Friends" contacts={mockContacts} />);
    await waitFor(() => {
      // Use waitFor
      expect(screen.getByText('Friends')).toBeInTheDocument();
      expect(screen.getByText('Dianne Russell')).toBeInTheDocument();
    });
  });
});
