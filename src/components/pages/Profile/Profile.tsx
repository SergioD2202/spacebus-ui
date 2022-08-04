/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { FC } from 'react';
import Options from '../../shared/Options/Options';
import styles from './Profile.module.scss';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => (
  <>
    <div className={styles.Profile + ' mx-auto'} data-testid="Profile">
      <div className="d-none d-lg-flex justify-content-between">
        <div className="w-100">
          <div className="d-flex align-items-center">
            <div className={styles.profileImage + ' bg-primary'}></div>
            <div className="d-flex flex-column align-items-center ms-5">
              <span className="mb-2">Name LastName</span>
              <span>Username</span>
            </div>
          </div>
          <div className="d-flex mt-3 w-100 align-items-between">
            <div className="d-flex flex-column align-items-center">
              <span className={styles.boldLabel + ' text-primary'}>
                Empleado
              </span>
              <span className={styles.boldLabel + ' text-primary'}>
                Balance: 1000000
              </span>
            </div>

            <button
              type="button"
              className={
                styles.boldLabel +
                ' btn btn-warning text-dark text-center p-1 shadow-sm'
              }
            >
              Edit Personal Info
            </button>
          </div>
        </div>

        <div className="w-50 ms-5">
          <Options view="client" />
        </div>
      </div>

      <div className="d-flex d-lg-none">Prueba</div>
    </div>
  </>
);

export default Profile;
