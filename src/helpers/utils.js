export const getFormData = (object) => {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, object[key].toString()));
  return formData;
};

export const getDateWithFormat = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // January is 0!

  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  return `${dd}.${mm}.${yyyy}`;
};

export const getCurrentUser = () => {
  let user = null;
  try {
    user =
      localStorage.getItem('barbershop-app-user') != null
        ? JSON.parse(localStorage.getItem('barbershop-app-user'))
        : null;
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js  : getCurrentUser -> error', error);
    user = null;
  }
  return user;
};

export const setCurrentUser = (user) => {
  try {
    if (user) {
      localStorage.setItem('barbershop-app-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('barbershop-app-user');
    }
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : setCurrentUser -> error', error);
  }
};

export const getCurrentToken = () => {
  let token = null;
  try {
    token =
      localStorage.getItem('barbershop-app-token') != null
        ? JSON.parse(localStorage.getItem('barbershop-app-token'))
        : null;
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js  : getCurrentToken -> error', error);
    token = null;
  }
  return token;
};

export const setCurrentToken = (token) => {
  try {
    if (token) {
      localStorage.setItem('barbershop-app-token', JSON.stringify(token));
    } else {
      localStorage.removeItem('barbershop-app-token');
    }
  } catch (error) {
    console.log('>>>>: src/helpers/Utils.js : setCurrentToken -> error', error);
  }
};

export const getCurrentIP = async () => {
  const req = await fetch('https://api.ipify.org/?format=json');
  const res = await req.json();
  return res;
};
