import axios from 'axios';

export default {
  site: {
    name: process.env.APP_NAME
  },
  axiosClients: {
    resourceClient: {
      client: axios.create({
        baseURL: process.env.APP_RESOURCE_URL,
        responseType: 'json',
        maxContentLength: 2000,
        crossdomain: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjYsImV4cCI6MTU0NDE2MDEwNywibGduIjoiYnphZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE1NDE1NjgxMDd9.4PbLvbiTdW9yE8rz - igtqGLGbTSYmAoKYCZNA79LDHY'
        }
      })
    }
  }
};
