import axios from "axios";
const USER_API_BASE_URL = "http://localhost:8080/basicauth"

class AuthenticationService 
{
    registerSuccessfulLogin(userId)
    {
        console.log('registerSuccessfulLogin', userId);
        window.sessionStorage.setItem('authenticatedUser', userId);
    }

    registerSuccessfulRegistration()
    {
        console.log('Registration Successful');
    }

    logout()
    {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn()
    {
        let user = sessionStorage.getItem('authenticatedUser');
        if(user===null)
            return false;
        return true;
    }

    authenticateUser(authenticateUser)
    {
        return axios.post("http://localhost:8080/basicauth", authenticateUser)
    }
}


export default new AuthenticationService();