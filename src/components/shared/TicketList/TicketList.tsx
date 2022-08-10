import React, { FC } from 'react';
import Ticket from '../Ticket/Ticket';
import styles from './TicketList.module.scss';

interface TicketListProps {
  ticketArray?: any | undefined;
}

const TicketList: FC<TicketListProps> = (props) => (
  <div className={styles.TicketList + ' w-100'} data-testid="TicketList">
    {props.ticketArray.map((el: any, index: number) => (
      <div className="mb-5" key={index}>
        <Ticket description={el.description} />
      </div>
    ))}
  </div>
);

export default TicketList;
