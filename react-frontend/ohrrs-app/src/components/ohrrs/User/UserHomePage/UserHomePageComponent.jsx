import { Component } from 'react';
import AuthenticationService from '../Authentication/AuthenticationService';

class UserHomePageComponent extends Component
{
  render()
  {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
      <div className="userHomePageComponent">
        {/* <div>
          Welcome, {this.props.params.email} <br />
          You can book rooms as per your requirement <Link to="/rooms">here</Link>.
        </div> */}

        {/* Masthead*/}
        <header className="masthead" >
          <div className="container">
            <div className="masthead-subheading">Welcome To Claim.ly!</div>
            <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
          </div>
        </header>

        {/* Services*/}
        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase text-muted">Our Services</h2>
              <h3 className="section-subheading text-muted">services</h3>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">Problems Simplified</h4>
                <p className="text-muted">We are flexible and solution-focused. Our approach is straight-forward and always mindful of your needs. We will work with you to come up with the best solution.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-laptop fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">24/7 Functional</h4>
                <p className="text-muted">We are happy to be available at your service all day and all night.</p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-lock fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">Security</h4>
                <p className="text-muted">We take the opportunity to introduce ourselves as a highly professional conscious organization, committed to achieve excellence for its customers</p>
              </div>
            </div>
          </div>
        </section>

        {/* About*/}
        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">About Us</h2>
              <h3 className="section-subheading text-muted">what and when</h3>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="./img/about/1.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Frbruary 2022</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">We have started our hotel service for the users since February 2022.</p></div>
                </div>
              </li>
              <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="./img/about/3.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2022</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">Now we are able to serve our customers with atmost support and hospitality.</p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="./img/about/4.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Upcoming...</h4>
                    <h4 className="subheading">Phase Two Expansion</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">We are planning to take a step forward in service delivery and business expansion.</p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Story!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">We as a team, are working together to provide the customers manage their tasks with ease, through our application <h4 className="section-subheading text-muted">Claim.ly</h4>.</p></div>
            </div>
          </div>
        </section>

        {/* Contact*/}
        <section className="page-section" id="contact">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Get in touch with us</h3>
            </div>
            
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div className="row align-items-stretch mb-5">
                <div className="col-md-6">
                  <div className="form-group">
                    {/* Name input*/}
                    <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                       {/* isUserLoggedIn && sessionStorage.getItem('authenticatedUser')} placeholder={
                        isUserLoggedIn && "Your Name *"}  */}
                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                  </div>
                  <div className="form-group">
                    {/* Email address input*/}
                    <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                  </div>
                  <div className="form-group mb-md-0">
                    {/* Phone number input*/}
                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-group-textarea mb-md-0">
                    {/* Message input*/}
                    <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required" defaultValue={""} />
                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                  </div>
                </div>
              </div>
              {/* Submit success message*/}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center text-white mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
              </div>
              {/* Submit error message*/}
              <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
              {/* Submit Button*/}
              <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
            </form>
          </div>
        </section>

    </div>    
    );
  }
}



export default UserHomePageComponent;