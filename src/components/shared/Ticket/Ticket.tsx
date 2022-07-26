import React, { FC } from 'react';
import styles from './Ticket.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TicketProps {
  id?: number;
  description?: string;
  price?: number;
  launchDate?: string | Date;
  companyName?: string;
  companyLogo?: string;
  mode?: string;
}

const buyTicket = (ticketId: number | undefined) => {
  const acceptBuy = confirm(
    '¿está seguro de comprar el ticket ' + ticketId + '?'
  );

  if (acceptBuy) {
    alert('compra realizada!');
  }
};

const Ticket: FC<TicketProps> = (props) => (
  <div
    className={
      styles.Ticket +
      ' shadow rounded p-4 border border-primary d-flex flex-md-row flex-column justify-content-between align-items-center'
    }
    data-testid="Ticket"
  >
    <div className="d-flex flex-column align-items-center">
      <img src={props.companyLogo} alt="logo" loading="lazy" />
      <span className={styles.companyName}>{props.companyName}</span>
      <span>{props.description}</span>
    </div>

    <div>
      Fecha de salida:{' '}
      {props.launchDate
        ?.toLocaleString('en-US')
        .split('T')[0]
        .split('-')
        .reverse()
        .join('-')}
    </div>

    <h1>{props.price}$</h1>

    {props.mode === 'read-only' ? (
      <></>
    ) : props.mode === 'on-sale' ? (
      <>
        <button
          className="p-2 btn btn-outline-success"
          onClick={() => buyTicket(props.id)}
        >
          Comprar
        </button>
      </>
    ) : props.mode === 'editor' ? (
      <>
        <div className="d-flex flex-md-row flex-column">
          <button className="p-2 btn btn-outline-info mb-2 ms-2">
            Actualizar
          </button>
          <button className="p-2 btn btn-outline-danger ms-2">Anular</button>
        </div>
      </>
    ) : (
      <></>
    )}
  </div>
);

export default Ticket;
