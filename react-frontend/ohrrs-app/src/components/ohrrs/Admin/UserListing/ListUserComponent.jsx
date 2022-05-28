import React, { Component } from 'react';

import UserService from '../../../../api/services/UserService';

class ListUserComponent extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUserClicked = this.deleteUserClicked.bind(this);
        this.updateUserClicked = this.updateUserClicked.bind(this);
        this.addUserClicked = this.addUserClicked.bind(this);
        this.refreshUsers = this.refreshUsers.bind(this);
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        UserService.getUsersData().then((res) => {
            this.setState({ users: res.data });
        });
    }

    deleteUserClicked(id, name) {
        UserService.deleteUser(id)
            .then(
                response => {
                    this.setState({ message: `Delete of User ${name} Successful` });
                    this.refreshUsers();
                }
            )
    }

    updateUserClicked(id) {
        this.props.navigate(`/admin-ListUsers/${id}`);
    }

    addUserClicked() {
        this.props.navigate(`/admin-ListUsers/-1`);
    }

    render() {
        return (
            <div>
                <div>
                    <header id="admin-rooms-header" />
                </div>

                <div>
                    <h2 className="display-4"><em>Find Users information below</em></h2>
                </div>

                <section>
                    <div>
                        {this.state.message && <div className='alert alert-success'>{this.state.message}</div>}
                        <div className="container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.map(
                                            user =>
                                                <tr key={user.id}>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td><button className='btn btn-primary' onClick={() => this.updateUserClicked(user.id, user.name)}>Update</button>   <button className='btn btn-warning' onClick={() => this.deleteUserClicked(user.id, user.name)}>Delete</button></td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <div>
                                <button className="btn btn-outline-success text-dark" onClick={this.addUserClicked}>Add a User</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


export default ListUserComponent;