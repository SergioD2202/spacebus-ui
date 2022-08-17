import React, { FC, useState } from 'react';
import TicketList from '../../shared/TicketList/TicketList';
import styles from './TicketAdmin.module.scss';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

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

const TicketAdmin: FC<TicketAdminProps> = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [view, setView] = useState('create');

  return (
    <div className={styles.TicketAdmin} data-testid="TicketAdmin">
      <span className={styles.title + ' text-info mb-3'}>
        Administra los tickets de {test[0].rocketLaunche.spacecraftCompany.name}
      </span>
      <div className="d-flex align-items-center justify-content-start w-75 mx-auto mb-4">
        <button
          className="p-2 btn btn-success"
          onClick={() => setView('create')}
        >
          Crear Ticket
        </button>
        <button
          className="p-2 btn btn-info ms-2"
          onClick={() => setView('update')}
        >
          Actualizar
        </button>
      </div>
      {view === 'create' ? (
        <>
          <form className="d-flex flex-column align-items-start justify-content-start w-75 p-3 mx-auto mb-4 bg-light">
            <h2>Crear un ticket</h2>
            <div className="form-group mb-3">
              <label htmlFor="newDescription">Descripción</label>
              <input
                type="text"
                className="form-control"
                name="newDescription"
                id="newDescription"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="newPrice">Precio</label>
              <input
                type="number"
                className="form-control"
                name="newPrice"
                id="newPrice"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="newCapacity">Capacidad</label>
              <input
                type="number"
                className="form-control"
                name="newCapacity"
                id="newCapacity"
              />
            </div>
            <div className="form-group mb-3">
              <label>Fecha de lanzamiento</label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                wrapperClassName={styles.datepicker}
              />
            </div>
            <select className="form-control mb-3 w-25" id="newPlanetFrom">
              <option>Planeta de origen</option>
            </select>
            <select className="form-control mb-3 w-25" id="newPlanetTo">
              <option>Planeta de llegada</option>
            </select>
          </form>
        </>
      ) : (
        <>
          <form className="d-flex flex-column align-items-start justify-content-start w-75 p-3 mx-auto mb-4 bg-light">
            <h2>Actualizar un ticket</h2>
            <div className="form-group mb-3">
              <label htmlFor="updateDescription">Descripción</label>
              <input
                type="text"
                className="form-control"
                name="updateDescription"
                id="updateDescription"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="updatePrice">Precio</label>
              <input
                type="number"
                className="form-control"
                name="updatePrice"
                id="updatePrice"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="updateCapacity">Capacidad</label>
              <input
                type="number"
                className="form-control"
                name="updateCapacity"
                id="updateCapacity"
              />
            </div>
            <div className="form-group mb-3">
              <label>Fecha de lanzamiento</label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                wrapperClassName={styles.datepicker}
              />
            </div>
            <select className="form-control mb-3 w-25" id="updatePlanetFrom">
              <option>Planeta de origen</option>
            </select>
            <select className="form-control mb-3 w-25" id="updatePlanetTo">
              <option>Planeta de llegada</option>
            </select>
          </form>
        </>
      )}
      <TicketList ticketArray={test} mode="editor" />
    </div>
  );
};

export default TicketAdmin;
