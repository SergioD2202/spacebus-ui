import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PurchaseTicket from './PurchaseTicket';

describe('<PurchaseTicket />', () => {
  test('it should mount', () => {
    render(<PurchaseTicket />);
    const purchaseTicket = screen.getByTestId('PurchaseTicket');

    expect(purchaseTicket).toBeInTheDocument();
  });
});
