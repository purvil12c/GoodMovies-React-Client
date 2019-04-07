const user_login_url = 'https://express-goodmovies-server.herokuapp.com/users/login';
const user_get_profile = 'https://express-goodmovies-server.herokuapp.com/users/profile';
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

    getProfile = () =>
        fetch(user_get_profile, {
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())

}