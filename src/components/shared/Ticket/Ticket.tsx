import React, { FC } from 'react';
import styles from './Ticket.module.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TicketProps {
  description?: string;
  price?: number;
  launchDate?: string | Date;
  companyName?: string;
  companyLogo?: string;
}

const Ticket: FC<TicketProps> = (props) => (
  <div className={styles.Ticket} data-testid="Ticket">
    {props.description}
  </div>
);

export default Ticket;
