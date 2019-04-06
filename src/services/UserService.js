const user_login_url = 'URL';

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

}