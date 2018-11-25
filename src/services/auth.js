import config from '../config/configureApp';

const axios = config.axiosClients.resourceClient.client;

class AuthService {
  login(payload) {
    // dung payload
    return axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .then(user => {
        localStorage.setItem('token', JSON.stringify(user.id)); // save token
        return user;
      });

    // return user;
  }

  getUserByToken(token) {
    return axios
      .get(`https://jsonplaceholder.typicode.com/users/${token}`)
      .then(res => res.data);
  }
}

export default new AuthService();
