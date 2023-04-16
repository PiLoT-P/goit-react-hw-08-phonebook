import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const addContactsApi = (todo) => {
    return axios
        .post('contacts', todo)
        .then(({ data }) => { return {...todo, id: data.id} });
}

export const getContactsApi = () => {
    return axios
        .get('/contacts')
        .then(({ data }) => console.log(data));
}


export const removeContactsApi = (id) => {
    return axios
        .delete(`contacts/${id}`)
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
    return axios
        .post('/users/logout', {
            params: {
              Authorization: token  
            },
        })
        .then(({data}) => data)
}