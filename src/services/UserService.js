const user_login_url = 'https://express-goodmovies-server.herokuapp.com/users/login';
const user_find_by_id = 'https://express-goodmovies-server.herokuapp.com/users/';
const user_register_url = 'URL';

export default class UserService {
    login = (user) =>
        fetch(user_login_url, {
            body: JSON.stringify(user),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json());

    register = (user) =>
        fetch(user_register_url, {
            body: JSON.stringify(user),
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json());

    findUserById = (id) =>
        fetch(user_find_by_id + id, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())

}