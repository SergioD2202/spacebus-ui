import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PurchasedTickets from './PurchasedTickets';

describe('<PurchasedTickets />', () => {
  test('it should mount', () => {
    render(<PurchasedTickets />);
    
    const purchasedTickets = screen.getByTestId('PurchasedTickets');

    expect(purchasedTickets).toBeInTheDocument();
  });
});