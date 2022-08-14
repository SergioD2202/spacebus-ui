import React, { FC } from 'react';
import TicketList from '../../shared/TicketList/TicketList';
import styles from './TicketAdmin.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TicketAdminProps {}

const test: any[] = [
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

const TicketAdmin: FC<TicketAdminProps> = () => (
  <div className={styles.TicketAdmin} data-testid="TicketAdmin">
    <span className={styles.title + ' text-info mb-3'}>
      Administra los tickets de {test[0].rocketLaunche.spacecraftCompany.name}
    </span>
    <div className="d-flex align-items-center justify-content-start w-75 mx-auto mb-4">
      <button className="p-2 btn btn-success">Crear Ticket</button>
    </div>
    <TicketList ticketArray={test} mode="editor" />
  </div>
);

export default TicketAdmin;
