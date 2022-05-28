import React, { Component } from 'react'

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className="footer py-2 " style={{backgroundColor: '#FAEBD7'}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 text-lg-start">Claim.ly 2022</div>
                            <div className="col-lg-4 text-lg-end">
                                <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                                <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default FooterComponent