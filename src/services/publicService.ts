// eslint-disable-next-line @typescript-eslint/no-var-requires
const serverInfo: any = require('../serverPort.json');

const BASE_URL: string = serverInfo.url;

const getCountries = () => {
  return fetch(`${BASE_URL}/public/countries`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  });
};

const getPlanets = () => {
  return fetch(`${BASE_URL}/public/planets`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  });
};

const getIdenTypes = () => {
  return fetch(`${BASE_URL}/public/identification-types`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  });
};

const getRoles = () => {
  return fetch(`${BASE_URL}/public/roles`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  });
};

export { getCountries, getPlanets, getIdenTypes, getRoles };
