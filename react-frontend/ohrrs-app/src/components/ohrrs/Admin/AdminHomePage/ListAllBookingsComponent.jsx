import React from "react";
import { Component } from "react";
import BookingsService from "../../../../api/services/BookingsService";
import UserService from "../../../../api/services/UserService";

class ListAllBookingsComponent extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            bookings: []
        }
    }

    componentDidMount() {
        BookingsService.getAllBookings().then((res) => {
            this.setState({ bookings: res.data });
        });
    }

    render()
    {
        return (
            <div>
                <div>
                    <header id="admin-rooms-header" />
                </div>

                <div>
                    <h2 className="display-4"><em>Find Bookings information below</em></h2>
                </div>
    
                <section>
                    <div>
                        <div className="container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Check-In</th>
                                        <th>Check-Out</th>
                                        <th>No Of Adults</th>
                                        <th>No Children</th>
                                        <th>Booking ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.bookings.map(
                                            booking =>
                                                <tr key={booking.id}>
                                                    <td>{booking.checkIn}</td>
                                                    <td>{booking.checkOut}</td>
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

export default ListAllBookingsComponent;