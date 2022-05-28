import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginComponent from './User/Authentication/LoginComponent';
import UserRegistrationComponent from './User/UserRegistrationComponent';
import UserHomePageComponent from './User/UserHomePage/UserHomePageComponent';
import ListAvailableRoomsComponent from './User/UserHomePage/ListAvailableRoomsComponent';

import AuthenticatedRoute from './User/Authentication/AuthenticatedRoute';

import HeaderComponent from './HeaderFooterComponents/HeaderComponent';
import FooterComponent from './HeaderFooterComponents/FooterComponent';

import LogoutComponent from './User/Authentication/LogoutComponent';


import AdminLoginComponent from './Admin/Authentication/AdminLoginComponent';
import AdminHomePageComponent from './Admin/AdminHomePage/AdminHomePageComponent';

import UpdateRoomInformationComponent from './Admin/Rooms/UpdateRoomInformationComponent';

import AdminAuthenticatedRoute from './Admin/Authentication/AdminAuthenticatedRoute';
import AdminLogoutComponent from './Admin/Authentication/AdminLogoutComponent';


import withNavigation from './Routing/withNavigation';
import withParams from './Routing/withParams';
import ListUserComponent from './Admin/UserListing/ListUserComponent';
import ListAllRoomsComponent from './Admin/Rooms/ListAllRoomsComponent';
import ListAllBookingsComponent from './Admin/AdminHomePage/ListAllBookingsComponent';

import BookingsComponent from './User/UserHomePage/BookingsComponent';
import BillComponent from './User/UserHomePage/BillComponent';
import UpdateUserInformationComponent from './Admin/UserListing/UpdateUserInformation';

class OhrrsApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const AdminLoginComponentWithNavigation = withNavigation(AdminLoginComponent);

        const UserHomePageComponentwithParams = withParams(UserHomePageComponent);
        const AdminHomePageComponentWithParams = withParams(AdminHomePageComponent);

        const ListAllRoomsComponentWithNavigation = withNavigation(ListAllRoomsComponent);
        const ListUserComponentWithNavigation = withNavigation(ListUserComponent);

        const UpdateRoomInformationComponentWithParamsAndNavigation = withParams(withNavigation(UpdateRoomInformationComponent));
        const UpdateUserInformationComponentWithParamsAndNavigation = withParams(withNavigation(UpdateUserInformationComponent));

        const UserRegistrationComponentWithNavigation = withNavigation(UserRegistrationComponent);

        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

        return (
            <div className="OhrrsApp">
                <Router>
                    <HeaderComponentWithNavigation />
                    <Routes>
                        <Route path="/" element={<UserHomePageComponent />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/registration" element={<UserRegistrationComponentWithNavigation />} />
                        <Route path="/home/:name" element={<AuthenticatedRoute><UserHomePageComponentwithParams /></AuthenticatedRoute>} />
                        <Route path="/rooms" element={<AuthenticatedRoute><ListAvailableRoomsComponent /></AuthenticatedRoute>} />
                        <Route path="/bookings" element={<AuthenticatedRoute><BookingsComponent /></AuthenticatedRoute>} />
                        <Route path="/bill" elemrnt={<AuthenticatedRoute><BillComponent /></AuthenticatedRoute>} />
                        <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} />

                        <Route path="/admin-Login" element={<AdminLoginComponentWithNavigation />} />
                        <Route path="/admin-ListRooms/:id" element={<AdminAuthenticatedRoute><UpdateRoomInformationComponentWithParamsAndNavigation /></AdminAuthenticatedRoute>} />
                        <Route path="/admin-ListUsers/:id" element={<AdminAuthenticatedRoute><UpdateUserInformationComponentWithParamsAndNavigation /></AdminAuthenticatedRoute>} />
                        <Route path="/admin-ListRooms" element={<AdminAuthenticatedRoute><ListAllRoomsComponentWithNavigation /></AdminAuthenticatedRoute>} />
                        <Route path="/admin-ListUsers" element={<AdminAuthenticatedRoute><ListUserComponentWithNavigation /></AdminAuthenticatedRoute>} />
                        <Route path="/admin-ListBookings" element={<AdminAuthenticatedRoute><ListAllBookingsComponent /></AdminAuthenticatedRoute>} />
                        <Route path="/admin-Home/:username" element={<AdminAuthenticatedRoute><AdminHomePageComponentWithParams /></AdminAuthenticatedRoute>} />
                        <Route path="/admin-Logout" element={<AdminAuthenticatedRoute><AdminLogoutComponent /></AdminAuthenticatedRoute>} />

                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </Router>
            </div>
        );
    }
}

function ErrorComponent() 
{
    return <div>An unexpected error has occured, please contact support at pod2@support.com </div>
}

export default OhrrsApp;