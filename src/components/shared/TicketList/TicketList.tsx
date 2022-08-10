import React, { FC } from 'react';
import Ticket from '../Ticket/Ticket';
import styles from './TicketList.module.scss';

interface TicketListProps {
  ticketArray?: any | undefined;
}

const TicketList: FC<TicketListProps> = (props) => (
  <div className={styles.TicketList} data-testid="TicketList">
    TicketList Component
    {props.ticketArray.map((el: any, index: number) => (
      <Ticket key={index} description={el.description} />
    ))}
  </div>
);

export default TicketList;
