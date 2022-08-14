import React, { FC } from 'react';
import styles from './Ticket.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TicketProps {
  description?: string;
  price?: number;
  launchDate?: string | Date;
  companyName?: string;
  companyLogo?: string;
  mode?: string;
}

const Ticket: FC<TicketProps> = (props) => (
  <div
    className={
      styles.Ticket +
      ' shadow rounded p-2 border border-primary d-flex justify-content-between align-items-center'
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
        <button className="p-2 btn btn-outline-success">Comprar</button>
      </>
    ) : props.mode === 'editor' ? (
      <>
        <button className="p-2 btn btn-outline-info">Actualizar</button>
        <button className="p-2 btn btn-outline-danger">Anular</button>
      </>
    ) : (
      <></>
    )}
  </div>
);

export default Ticket;
