import React, { FC } from 'react';
import styles from './Options.module.scss';

interface OptionsProps {
  view?: string;
}

const Options: FC<OptionsProps> = (props) => {
  if (props.view == 'client') {
    return (
      <>
        <div
          className={
            styles.Options +
            ' mx-auto d-flex flex-column align-items-center shadow'
          }
          data-testid="Options"
        >
          <span className={styles.title + ' text-primary'}>Opciones</span>

          <a href="" className={styles.option + ' text-info'}>
            Tickets comprados
          </a>

          <a href="" className={styles.option + ' text-info'}>
            Comprar Tickets
          </a>
        </div>
      </>
    );
  } else if (props.view == 'employee') {
    return (
      <>
        <div
          className={
            styles.Options +
            ' mx-auto d-flex flex-column align-items-center shadow'
          }
          data-testid="Options"
        >
          <span className={styles.title + ' text-primary'}>Opciones</span>

          <a href="" className={styles.option + ' text-info'}>
            Crear Ticket
          </a>

          <a href="" className={styles.option + ' text-info'}>
            Anular Ticket
          </a>

          <a href="" className={styles.option + ' text-info'}>
            Lista de Tickets
          </a>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Options;
