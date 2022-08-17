import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TicketAdmin from './TicketAdmin';

describe('<TicketAdmin />', () => {
  test('it should mount', () => {
    render(<TicketAdmin />);
    
    const ticketAdmin = screen.getByTestId('TicketAdmin');

    expect(ticketAdmin).toBeInTheDocument();
  });
});