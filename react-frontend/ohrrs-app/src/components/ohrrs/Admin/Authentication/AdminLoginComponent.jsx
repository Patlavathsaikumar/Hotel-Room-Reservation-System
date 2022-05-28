import React, { Component } from "react";
import AdminAuthenticationService from "./AdminAuthenticationService";

class AdminLoginComponent extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            hasLoginFailed : false,
            showSuccessMessage : false,
            register : false,

            adminUsername : '',
            adminName : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.LoginClicked = this.LoginClicked.bind(this);
    }

    //handleChange is used for handling the data change events of username & password field 
    handleChange(event)
    {
        console.log(event.target.name)
        this.setState({[event.target.name] : event.target.value})
    }

    LoginClicked()
    {
        //username - "admin1" & password = "admin1"
        if(this.state.username==="admin1" && this.state.password==="admin1")
        {
            AdminAuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.navigate(`/admin-Home/${this.state.username}`)
            this.setState({hasLoginFailed : false})
        }   
        else
        {
            this.setState({hasLoginFailed : true})
            this.setState({showSuccessMessage : false})
            this.props.navigate("/admin-Login")
        }

        // let authenticateAdmin = {username:this.state.username, password:this.state.password}

        // AdminAuthenticationService.authenticateAdmin(authenticateAdmin)
        //     .then(response => {

        //         this.setState({adminUsername : response.data.username})
        //         this.setState({adminName : response.data.name})

        //         if(this.state.adminUsername == null && this.state.adminName == null)
        //         {
        //             this.setState({ hasLoginFailed: true })
        //             this.setState({ showSuccessMessage: false });
        //             this.props.navigate("/login")
        //         }
        //         else
        //         {
        //             AdminAuthenticationService.registerSuccessfulLogin(this.state.adminUsername);
        //             this.props.navigate(`/admin-Home/${this.state.adminUsername}`);
        //             this.setState({hasLoginFailed : false})
        //         }   
        //     })
    }

    render() 
    {
        return (
            <div className="adminLoginComponent">
                <section className="vh-100" style={{ backgroundColor: '#0E5C7B' }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card" style={{ borderRadius: '1rem' }}>
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img src="./img/Admin/admin-login.png" alt="Admin Logo" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">
                                                <form>
                                                    <div>
                                                        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                                                        {this.state.showSuccessMessage && <div>Login Successful</div>}
                                                    </div>
                                                    <div className="d-flex align-items-center mb-3 pb-1">
                                                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                                                        <span className="h1 fw-bold mb-0">Admin Login</span>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input type="email" name="username" id="username" className="form-control form-control-lg" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input type="password"  name="password" id="password" className="form-control form-control-lg" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                                    </div>
                                                    <div className="pt-1 mb-4">
                                                        <button className="btn btn-dark btn-lg btn-block" type="button" onClick={this.LoginClicked} >Login</button>
                                                    </div>
                                                    <a className="small text-muted" href="#!">Forgot password?</a>
                                                    <p/>
                                                    <a href="#!" className="small text-muted">Terms of use. </a>
                                                    <a href="#!" className="small text-muted">Privacy policy</a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default AdminLoginComponent