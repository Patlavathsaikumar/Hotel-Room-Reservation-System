import { Component } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../../api/services/UserService';

class UserRegistrationComponent extends Component
{
  constructor(props) {
    super(props);
    this.state = {
        name : '',
        email : '',
        password : '',
        repeatPassword : '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.RegisterClicked = this.RegisterClicked.bind(this);
  }

  //handleChange is used for handling the data change events of text fields
  handleChange(event)
  {
    console.log(event.target.name)
    this.setState({[event.target.name] : event.target.value})
  }

  RegisterClicked()
  {
    let user = {name:this.state.name, email:this.state.email, password:this.state.password}
    UserService.addUser(user).then(res=>{
      this.props.navigate("/login");
    });
    
  }

  LoginClicked()
  {
    return <Link to="/login" />
  }

  render() 
  {
    return (
      <div className="form">

        {/* Calling to the methods */}
        {/* <div className="messages">
        {errorMessage()}
        {successMessage()}
        </div> */}

        <section className="vh-100 bg-image" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: '15px' }}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                      <form>
                        <div className="form-outline mb-4">
                          <input type="text" id="name" name="name" className="form-control form-control-lg" placeholder="Enter Your Name" value={this.state.name} onChange={this.handleChange} />
                          {/* <label className="form-label" htmlFor="name"></label> */}
                        </div>
                        <div className="form-outline mb-4">
                          <input type="email" id="email" name="email" className="form-control form-control-lg" placeholder="Enter Your Email" value={this.state.email} onChange={this.handleChange}/>
                          {/* <label className="form-label" htmlFor="email">Your Email</label> */}
                        </div>
                        <div className="form-outline mb-4">
                          <input type="password" id="password" name="password" className="form-control form-control-lg" value={this.state.password} onChange={this.handleChange} />
                          <label className="form-label" htmlFor="password">Password</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="password" id="repeatPassword" name="repeatPassword" className="form-control form-control-lg" value={this.state.repeatPassword} onChange={this.handleChange} />
                          <label className="form-label" htmlFor="repeatPassword">Repeat your password</label>
                        </div>
                        <div className="form-check d-flex justify-content-left mb-5">
                          <input className="form-check-input me-2" id="form2Example3cg" type="checkbox" required onChange={this.handleChange} />
                          <label className="form-check-label" htmlFor="form2Example3g">
                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={this.RegisterClicked}>Register</button>
                        </div>
                        {/* <p className="text-center text-muted mt-5 mb-0">Already have an account? <button type="button" className="btn btn-primary btn-sm" onClick={this.LoginClicked}>Login</button></p> */}
                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Already have an account? <Link to="/login">Login</Link> </p>
                      </form>
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

export default UserRegistrationComponent;