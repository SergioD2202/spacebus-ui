// eslint-disable-next-line @typescript-eslint/no-var-requires
const serverInfo: any = require('../serverPort.json');

const BASE_URL: string = serverInfo.url;

const isUserLoggedIn = () => {
  return localStorage.hasOwnProperty('user')
    ? localStorage.getItem('user')
    : null;
};

const login = (loginData: any) => {
  return fetch(`${BASE_URL}/aut/signin`, {
    method: 'POST',
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        localStorage.setItem('userToken', result.token);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

const getUserInfo = () => {
  return fetch(`${BASE_URL}/profile/me`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('userToken'),
    },
  });
};

export { isUserLoggedIn, login, getUserInfo };