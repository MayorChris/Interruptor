import axios from "./index";

const baseUsers = "users";
const baseRoles = "roles";

class AuthApi {
  static Login = (data) => {
    return axios.post(`${baseUsers}/login`, data);
  };

  static Register = (data) => {
    return axios.post(`${baseUsers}/register`, data);
  };

  static Logout = (data) => {
    return axios.post(`${baseUsers}/logout`, data, { headers: { Authorization: `${data.token}` } });
  };
}

class UsersApi {
  static Edit = (data) => {
    return axios.put(`${baseUsers}/edit`, data);
  };

  static Reset = (data) => {
    return axios.put(`${baseUsers}/password/reset`, data);
  };

  static ResetAll = (data) => {
    return axios.put(`${baseUsers}/password/reset/all`, data);
  };

  static Info = (user) => {
    return axios.get(`${baseUsers}/${user}`);
  };

  static View = () => {
    return axios.get(`${baseUsers}/view`);
  };

  static Delete = (user) => {
    return axios.delete(`${baseUsers}/${user}`);
  };
}

class RolesApi {
  static Info = (role) => {
    return axios.get(`${baseRoles}/info/${role}`);
  };

  static Login = (role) => {
    return axios.get(`${baseRoles}/login/${role}`);
  };

  static View = () => {
    return axios.get(`${baseRoles}/view`);
  };

  static Delete = (role) => {
    return axios.delete(`${baseRoles}/${role}`);
  };

  static Register = (data) => {
    return axios.post(`${baseRoles}/register`, data);
  };

  static Edit = (data) => {
    return axios.put(`${baseRoles}/edit`, data);
  };
}

class ResourcesApi {
  static View = () => {
    return axios.get(`resources`);
  };
}

export { ResourcesApi };
export { RolesApi };
export { UsersApi };
export default AuthApi;
