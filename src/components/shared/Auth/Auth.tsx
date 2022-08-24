import React, { FC, useContext, useEffect, useState } from 'react';
import styles from './Auth.module.scss';
import space from '../../../images/space.jpg';
import {
  getCountries,
  getPlanets,
  getIdenTypes,
} from '../../../services/publicService';
import { DataContext } from '../../../context/DataContext';
import { login, getUserInfo } from '../../../services/userService';
import { useNavigate } from 'react-router-dom';

interface AuthProps {
  type?: string;
  children?: React.ReactNode;
}

const Auth: FC<AuthProps> = (props) => {
  //Login variables
  const [loginUser, setLoginUser] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const { setUser } = useContext(DataContext);
  const navigator = useNavigate();

  //Select tag variables
  const [planets, setPlanets] = useState([]);
  const [countries, setCountries] = useState([]);
  const [idenTypes, setIdenTypes] = useState([]);
  const [isNextPage, setIsNextPage] = useState(false);

  //Register variables
  const [email, setEmail] = useState('');
  const [newUser, setNewUser] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [idenType, setIdenType] = useState(0);
  const [iden, setIden] = useState(0);
  const [country, setCountry] = useState(0);
  const [planet, setPlanet] = useState(0);

  //Error variables
  const [error, setError] = useState('');

  const handleError = (msg: string) => {
    setError(msg);

    setTimeout(() => setError(''), 2000);
  };

  const handleChange = (el: any, setFunction: any) => setFunction(el);

  const loginHandle = async (loginData: any) => {
    switch (true) {
      case (!loginUser || loginUser === '') &&
        (!loginPassword || loginPassword === ''):
        handleError('Error: Usuario y contraseña vacíos');
        break;

      case !loginUser || loginUser === '':
        handleError('Error: Usuario vacío');
        break;

      case !loginPassword || loginPassword === '':
        handleError('Error: Contraseña vacía');
        break;

      default:
        await login({
          username: loginData.loginUser,
          password: loginData.loginPassword,
        }).then(async (userExists) => {
          if (userExists) {
            const userData = await getUserInfo();
            const result = await userData.json();
            localStorage.setItem('user', JSON.stringify(result));
            setUser(result);
            navigator('/spacebus-ui/');
          } else {
            handleError(
              'Error: Hubo un error de autenticación en el usuario o contraseña'
            );
          }
        });
        break;
    }
  };

  const registerHandle = () => {
    console.log({
      email: email,
      newUser: newUser,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
      name: name,
      lastname: lastname,
      idenType: idenType,
      iden: iden,
      country: country,
      planet: planet,
    });
  };

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
              value={loginUser}
              onChange={(e) => handleChange(e.target.value, setLoginUser)}
            />
            <label className={' mb-2'}>Contrase&ntilde;a</label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              className={styles.inputField + ' mb-4 border border-light'}
              value={loginPassword}
              onChange={(e) => handleChange(e.target.value, setLoginPassword)}
            />
            <span className="text-danger mb-2">{error}</span>
            <div className="w-100 text-center">
              <button
                type="button"
                className={styles.button + ' btn btn-primary rounded'}
                onClick={() => loginHandle({ loginUser, loginPassword })}
              >
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
                value={email}
                className={styles.inputField + ' mb-2 border border-light'}
                onChange={(e) => handleChange(e.target.value, setEmail)}
              />
              <label className={' mb-2'}>Usuario</label>
              <input
                type="text"
                value={newUser}
                className={styles.inputField + ' mb-2 border border-light'}
                onChange={(e) => handleChange(e.target.value, setNewUser)}
              />
              <label className={' mb-2'}>Contrase&ntilde;a</label>
              <input
                type="password"
                value={newPassword}
                className={styles.inputField + ' mb-4 border border-light'}
                onChange={(e) => handleChange(e.target.value, setNewPassword)}
              />
              <label className={' mb-2'}>Confirmar Contrase&ntilde;a</label>
              <input
                type="password"
                value={confirmPassword}
                className={styles.inputField + ' mb-4 border border-light'}
                onChange={(e) =>
                  handleChange(e.target.value, setConfirmPassword)
                }
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
                value={name}
                className={styles.inputField + ' mb-2 border border-light'}
                onChange={(e) => handleChange(e.target.value, setName)}
              />
              <label className={' mb-2'}>Apellido</label>
              <input
                type="text"
                value={lastname}
                className={styles.inputField + ' mb-2 border border-light'}
                onChange={(e) => handleChange(e.target.value, setLastname)}
              />
              <label className={' mb-2'}>Identificación</label>
              <div className="d-flex w-100 align-items-center justify-content-between">
                <select
                  className="form-control mb-3 w-25"
                  onChange={(e) => handleChange(e.target.value, setIdenType)}
                >
                  <option value="">Tipo</option>
                  {idenTypes.map((idenType: any) => (
                    <option key={idenType.id} value={idenType.id}>
                      {idenType.name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  value={iden}
                  className={
                    styles.inputField + ' mb-2 ms-2 border border-light'
                  }
                  onChange={(e) => handleChange(e.target.value, setIden)}
                />
              </div>
              <select
                className="form-control mb-3 w-25"
                onChange={(e) => handleChange(e.target.value, setCountry)}
              >
                <option value="">País</option>
                {countries.map((country: any) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>

              <select
                className="form-control mb-3 w-25"
                onChange={(e) => handleChange(e.target.value, setPlanet)}
              >
                <option value="">Planeta</option>
                {planets.map((planet: any) => (
                  <option key={planet.id} value={planet.id}>
                    {planet.name}
                  </option>
                ))}
              </select>
              <div className="w-100 text-center">
                <span className="text-danger mb-2">{error}</span>
                <button
                  type="button"
                  className={styles.button + ' btn btn-info rounded'}
                  onClick={() => setIsNextPage(!isNextPage)}
                >
                  Anterior
                </button>
                <button
                  className={styles.button + ' btn btn-primary rounded ms-2'}
                  onClick={() => registerHandle()}
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
