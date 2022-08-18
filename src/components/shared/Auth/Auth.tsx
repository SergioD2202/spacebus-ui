import React, { FC, useEffect, useState } from 'react';
import styles from './Auth.module.scss';
import space from '../../../images/space.jpg';
import {
  getCountries,
  getPlanets,
  getIdenTypes,
} from '../../../services/publicService';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AuthProps {
  type?: string;
  children?: React.ReactNode;
}

const Auth: FC<AuthProps> = (props) => {
  const [planets, setPlanets] = useState([]);
  const [countries, setCountries] = useState([]);
  const [idenTypes, setIdenTypes] = useState([]);
  const [isNextPage, setIsNextPage] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getPlanets().then(async (planets: any) => {
      const result = await planets.json();
      setPlanets(result);
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getCountries().then(async (countries: any) => {
      const result = await countries.json();
      setCountries(result);
    });

    getIdenTypes().then(async (idenType: any) => {
      const result = await idenType.json();
      setIdenTypes(result);
    });
  }, []);

  return props.type == 'login' ? (
    <div
      className={
        styles.Auth +
        ' d-flex align-items-center justify-content-center align-items-lg-start justify-content-lg-between w-100'
      }
      data-testid="Auth"
    >
      <img
        src={space}
        alt="jupiter.jpg"
        className={styles.mainImage + ' d-none d-lg-block'}
        loading="lazy"
      />
      <div
        className={
          styles.loginContainer +
          ' d-flex align-items-center justify-content-center flex-column w-50 mx-auto'
        }
      >
        <div className="d-flex flex-column align-items-start">
          <span className="mb-2">Login</span>
          <form
            className={
              styles.titleContainer +
              ' p-3 d-flex flex-column align-items-start'
            }
          >
            <label className={' mb-2'}>Usuario</label>
            <input
              type="text"
              id="user"
              name="user"
              className={styles.inputField + ' mb-2 border border-light'}
            />
            <label className={' mb-2'}>Contrase&ntilde;a</label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              className={styles.inputField + ' mb-4 border border-light'}
            />
            <div className="w-100 text-center">
              <button className={styles.button + ' btn btn-primary rounded'}>
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={
        styles.Auth +
        ' d-flex align-items-center justify-content-center align-items-lg-start justify-content-lg-between w-100'
      }
      data-testid="Auth"
    >
      <img
        src={space}
        alt="jupiter.jpg"
        className={styles.mainImage + ' d-none d-lg-block'}
        loading="lazy"
      />
      <div
        className={
          styles.loginContainer +
          ' d-flex align-items-center justify-content-center flex-column w-50 mx-auto'
        }
      >
        <div>
          <span className="mb-2">Registro</span>
          <form
            className={
              styles.registerContainer +
              ' p-3 d-flex flex-column align-items-start'
            }
          >
            <div
              className={
                !isNextPage
                  ? ' d-flex flex-column align-items-start w-100'
                  : 'd-none'
              }
            >
              <label className={' mb-2'}>Correo</label>
              <input
                type="email"
                id="newEmail"
                name="newEmail"
                className={styles.inputField + ' mb-2 border border-light'}
              />
              <label className={' mb-2'}>Usuario</label>
              <input
                type="text"
                id="newUser"
                name="newUser"
                className={styles.inputField + ' mb-2 border border-light'}
              />
              <label className={' mb-2'}>Contrase&ntilde;a</label>
              <input
                type="password"
                id="newPwd"
                name="newPwd"
                className={styles.inputField + ' mb-4 border border-light'}
              />
              <label className={' mb-2'}>Confirmar Contrase&ntilde;a</label>
              <input
                type="password"
                id="confirmPwd"
                name="confirmPwd"
                className={styles.inputField + ' mb-4 border border-light'}
              />

              <div className="w-100 text-center">
                <button
                  type="button"
                  className={styles.button + ' btn btn-info rounded'}
                  onClick={() => setIsNextPage(!isNextPage)}
                >
                  Siguiente
                </button>
              </div>
            </div>

            <div
              className={
                isNextPage
                  ? ' d-flex flex-column align-items-start w-100'
                  : 'd-none'
              }
            >
              <label className={' mb-2'}>Nombre</label>
              <input
                type="text"
                id="newName"
                name="newName"
                className={styles.inputField + ' mb-2 border border-light'}
              />
              <label className={' mb-2'}>Apellido</label>
              <input
                type="text"
                id="newLastname"
                name="newLastname"
                className={styles.inputField + ' mb-2 border border-light'}
              />
              <label className={' mb-2'}>Identificación</label>
              <div className="d-flex w-100 align-items-center justify-content-between">
                <select className="form-control mb-3 w-25" id="newIdenType">
                  <option value="">Tipo</option>
                  {idenTypes.map((idenType: any) => (
                    <option key={idenType.id} value={idenType.id}>
                      {idenType.name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  id="newIden"
                  name="newIden"
                  className={
                    styles.inputField + ' mb-2 ms-2 border border-light'
                  }
                />
              </div>
              <select className="form-control mb-3 w-25" id="newCountry">
                <option value="">País</option>
                {countries.map((country: any) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>

              <select className="form-control mb-3 w-25" id="newFavplanet">
                <option value="">Planeta</option>
                {planets.map((planet: any) => (
                  <option key={planet.id} value={planet.id}>
                    {planet.name}
                  </option>
                ))}
              </select>
              <div className="w-100 text-center">
                <button
                  type="button"
                  className={styles.button + ' btn btn-info rounded'}
                  onClick={() => setIsNextPage(!isNextPage)}
                >
                  Anterior
                </button>
                <button
                  className={styles.button + ' btn btn-primary rounded ms-2'}
                >
                  Registrarse
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
