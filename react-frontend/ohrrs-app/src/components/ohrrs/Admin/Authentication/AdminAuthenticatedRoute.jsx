import { Component } from "react";
import { Navigate } from 'react-router-dom';

import AdminAuthenticationService from "./AdminAuthenticationService";

class AdminAuthenticatedRoute extends Component {
    render() {
        if (AdminAuthenticationService.isAdminLoggedIn()) {
            return { ...this.props.children }
        }
        else {
            return <Navigate to="/admin-Login" />
        }
    }
}

export default AdminAuthenticatedRoute;