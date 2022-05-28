import React from "react";
import { Component } from "react";
import moment from 'moment';

import BookingsService from "../../../../api/services/BookingsService";


class BookingsComponent extends Component 
{
    //87.48 using momemt for check in and check out
    constructor(props) {
        super(props)
        this.state = {
            bookings: [],
            checkIn: moment().format('YYYY-MM-DD'),
            checkOut: moment().format('YYYY-MM-DD'),
            noOfAdults: '',
            noOfChildren: '',
            roomType: '',
            noOfDays: '',
            user : null
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.bookRoomClicked = this.bookRoomClicked.bind(this);
    }

    componentDidMount() {
        let userId = JSON.parse(window.sessionStorage.getItem('authenticatedUser')).id
        BookingsService.getBookingsData(userId).then((res) => {
            this.setState({ bookings: res.data });
        });
    }

    handleChange(event) {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value })
    }

    bookRoomClicked() {
        let booking = {
            id:500,
            checkIn: this.state.checkIn,
            checkOut: this.state.checkOut,
            noOfAdults: this.state.noOfAdults,
            noOfChildren: this.state.noOfChildren,
            roomType: this.state.roomType,
            noOfDays:1,
            user : JSON.parse(window.sessionStorage.getItem('authenticatedUser')),
            room:null
        }

        console.log("****************")
        console.log(booking)
        console.log(booking.user)
        console.log("************************************")

        BookingsService.addBooking(booking)
            .then(res => {
                this.props.navigate("/bookings");
            });
    }

    render() 
    {
        return (
            <div>
                <div id="booking" className="section">
                    <div className="section-center">
                        <div className="container">
                            <div className="row">
                                <div className="booking-form">
                                    <form>
                                        {/* <div className="form-group">
                                            <div className="form-checkbox">
                                                <label htmlFor="roundtrip">
                                                    <input type="radio" id="roundtrip" name="flight-type" />
                                                    <span />Roundtrip
                                                </label>
                                                <label htmlFor="one-way">
                                                    <input type="radio" id="one-way" name="flight-type" />
                                                    <span />One way
                                                </label>
                                                <label htmlFor="multi-city">
                                                    <input type="radio" id="multi-city" name="flight-type" />
                                                    <span />Multi-City
                                                </label>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <span className="form-label" name="checkIn">Check-in</span>
                                                    <input className="form-control" type="date"
                                                    name="checkIn" onChange={this.handleChange} required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <span className="form-label" name="checkOut">Check-out</span>
                                                    <input className="form-control" type="date" 
                                                    name="checkOut"
                                                    onChange={this.handleChange}  required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <span className="form-label" name="noOfAdults">Adults (18+)</span>
                                                <select className="form-control" name="noOfAdults" onChange={this.handleChange}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <span className="select-arrow" />
                                            </div>
                                            <div className="col-md-4">
                                                <span className="form-label" name="noOfChildren">Children (0-17)</span>
                                                <select className="form-control" name="noOfChildren" onChange={this.handleChange}>
                                                    <option>0</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
                                                <span className="select-arrow" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <span className="form-label" name="roomType">Room Type</span>
                                                    <select className="form-control" onChange={this.handleChange}>
                                                        <option>Standard Room</option>
                                                        <option>Business class Room</option>
                                                        <option>Executive-Luxury Room</option>
                                                    </select>
                                                    <span className="select-arrow" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-btn">
                                                    <button className="submit-btn" onClick={this.bookRoomClicked}>Book Room</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div>
                        <div className="container">
                            <div className="masthead-subheading">Know the history of your bookings below</div>
                        </div>
                        <div className="container">

                            <table className="table">
                                {/* <caption>History of bookings</caption> */}
                                <thead>
                                    <tr>
                                        <th>check-In</th>
                                        <th>check-Out</th>
                                        <th>Adults</th>
                                        <th>Children</th>
                                        <th>Booking ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.bookings.map(
                                            booking =>
                                                <tr key={booking.id}>
                                                    <td>{moment(booking.checkIn).format('YYYY-MM-DD')}</td>
                                                    <td>{moment(booking.checkOut).format('YYYY-MM-DD')}</td>
                                                    <td>{booking.noOfAdults}</td>
                                                    <td>{booking.noOfChildren}</td>
                                                    <td>#{booking.id}</td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default BookingsComponent;