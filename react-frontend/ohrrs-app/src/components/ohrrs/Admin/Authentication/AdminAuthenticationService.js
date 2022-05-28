import axios from "axios";

class AdminAuthenticationService 
{
    registerSuccessfulLogin(username, password)
    {
        console.log('registerSuccessfulLogin');
        sessionStorage.setItem('authenticatedAdmin', username);
    }

    logout()
    {
        sessionStorage.removeItem('authenticatedAdmin');
    }

    isAdminLoggedIn()
    {
        let admin = sessionStorage.getItem('authenticatedAdmin');
        if(admin===null)
            return false;
        return true;
    }

    authenticateAdmin(authenticateAdmin)
    {
        return axios.post("http://localhost:8080/basicauth", authenticateAdmin)
    }
}

export default new AdminAuthenticationService();