import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/users"

class UserService
{
    addUser(user)
    {
        return axios.post(USER_API_BASE_URL, user);
    }

    deleteUser(id)
    {
        return axios.delete(USER_API_BASE_URL + `/${id}`);
    }
    
    updateUser(user, id)
    {
        return axios.put(USER_API_BASE_URL + `/${id}`, user);
    }

    getUsersData()
    {
        return axios.get(USER_API_BASE_URL);
    }

    getSpecificUserData(id)
    {
        return axios.get(USER_API_BASE_URL + `/${id}`)
    }
}

export default new UserService();