import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const addContactsApi = (todo, token) => {
    return axios
        .post('contacts', todo, {
            headers: {
                Authorization: `${token}`
            }
        })
        .then(({ data }) => { return {...todo, id: data.id} });
}

export const getContactsApi = (token) => {
    return axios
        .get('/contacts', {
            headers: {
                Authorization: `${token}`
            }
        })
        .then(({ data }) => data);
}


export const removeContactsApi = (id, token) => {
    return axios
        .delete(`/contacts/${id}`, {
            headers: {
                Authorization: `${token}`
            }
        })
        .then(() => id);

}

export const registerUserApi = (data) => {
    return axios
        .post('/users/signup', data)
        .then(({ data: {token, user:{name, email}} }) => ({token, name, email}));
}

export const loginUserApi = (data) => {
    return axios
        .post('/users/login', data)
        .then(({ data: {token, user:{name, email}} }) => ({token, name, email}));
}

export const logoutUserApi = (token) => {
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`
    return axios
        .post('/users/logout', null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(({ data }) => {
            // axios.defaults.headers.common.Authorization = ``
            return data;
        })
}