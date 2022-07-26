import React, { FC } from 'react';
import TicketList from '../../shared/TicketList/TicketList';
import styles from './PurchaseTicket.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PurchaseTicketProps {}

const test: object[] = [
  {
    id: 9,
    description: 'viajar fuera del planeta tierra',
    price: 10000,
    rocketLaunche: {
      id: 20,
      capacity: 100,
      sold: 0,
      available: 100,
      launchDate: '2023-12-31T00:00:00.000Z',
      spacecraftCompany: {
        id: 79,
        name: 'nasa',
        logo: 'https://storage.googleapis.com/portfolio-50b24.appspot.com/ebaa1a80ec267226f9e430d6d3b0641b1658701010051.png',
      },
    },
  },
  {
    id: 10,
    description: 'viajar fuera del planeta tierra',
    price: 10000,
    rocketLaunche: {
      id: 21,
      capacity: 100,
      sold: 0,
      available: 100,
      launchDate: '2023-12-31T00:00:00.000Z',
      spacecraftCompany: {
        id: 79,
        name: 'nasa',
        logo: 'https://storage.googleapis.com/portfolio-50b24.appspot.com/ebaa1a80ec267226f9e430d6d3b0641b1658701010051.png',
      },
    },
  },
  {
    id: 11,
    description: 'viajar fuera del planeta tierra',
    price: 10000,
    rocketLaunche: {
      id: 22,
      capacity: 100,
      sold: 0,
      available: 100,
      launchDate: '2023-12-31T00:00:00.000Z',
      spacecraftCompany: {
        id: 79,
        name: 'nasa',
        logo: 'https://storage.googleapis.com/portfolio-50b24.appspot.com/ebaa1a80ec267226f9e430d6d3b0641b1658701010051.png',
      },
    },
  },
];

const PurchaseTicket: FC<PurchaseTicketProps> = () => (
  <div className={styles.PurchaseTicket} data-testid="PurchaseTicket">
    <span className={styles.title + ' text-info mb-3'}>
      Resultados de Tickets Disponibles
    </span>
    <TicketList ticketArray={test} mode="on-sale" />
  </div>
);

export default PurchaseTicket;
