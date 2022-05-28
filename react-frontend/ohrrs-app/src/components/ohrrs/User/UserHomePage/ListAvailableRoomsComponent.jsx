import { Component } from 'react';
import { Link } from 'react-router-dom';

import RoomsService from '../../../../api/services/RoomsService';


class ListAvailableRoomsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: []
        }
    }

    componentDidMount() {
        RoomsService.getRoomsData().then((res) => {
            this.setState({ rooms: res.data });
        });
    }

    render() {
        return (

            <div className="listRoomsComponent">
                <div>
                    {/* Masthead*/}
                    <header className="masthead" id="our-rooms-header">
                        <div className="container">
                            <div className="masthead-subheading">Please find you bills below</div>
                        </div>
                    </header>
                </div>

                <section className="rooms">
                    <div id="box">
                        <div className="row-room">
                            <div className="column-room">
                                <div className="card-room">
                                    <img src="./img/our rooms/general-room.jpg" alt="Jane" style={{ width: '100%' }} />
                                    <div className="container-room">
                                        <h2>G class</h2>
                                        {/* <p className="title">CEO &amp; Founder</p> */}
                                        <p className="title">General rooms</p>
                                        <p>Our comfortable Superior Rooms provide a restful stay with your choice of a king bed or two twin beds.</p>
                                        <br />
                                        <footer className="blockquote-footer">Find more details in <cite title="Source Title">below table.</cite></footer>
                                    </div>
                                </div>
                            </div>
                            <div id="view_bill_id" className="section">
                                    <div className="section-center">
                                        <div className="container">
                                            <div className="row">
                                                <div className="booking-form">
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-group">
                                                                    <span className="form-label" name="view_bill_id">Member ID</span>
                                                                    <input className="form-control" type="text"
                                                                    name="checkIn" placeholder="Enter meber id here" onChange={this.handleChange} required />
                                                                </div>
                                                            </div>    
                                                            <div className="col-md-3">
                                                                <div className="form-btn">
                                                                    <button className="submit-btn" onClick={this.bookRoomClicked}>View Bill</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* <div className="column-room">
                                <div className="card-room">
                                    <img src="./img/our rooms/executive-luxury-room.jpg" alt="John" style={{ width: '100%' }} />
                                    <div className="container-room">
                                        <h2>Luxury Suite</h2>
                                        <p className="title">Executive luxury suite</p>
                                        <p>Executive rooms, with a luxurious double bed and seating area, are popular with business travellers and families.</p>
                                        <br />
                                        <footer className="blockquote-footer">Find more details in <cite title="Source Title">below table.</cite></footer>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <div className="container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Room Number</th>
                                        <th>Type</th>
                                        <th>Description</th>
                                        <th>Floor</th>
                                        <th>Capacity</th>
                                        <th>Price</th>
                                        {/* <th>Available</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.rooms.map(
                                            room =>
                                                <tr key={room.id}>
                                                    <td>{room.roomName}</td>
                                                    <td>{room.roomNo}</td>
                                                    <td>{room.roomType}</td>
                                                    <td>{room.description}</td>
                                                    <td>{room.floorNo}</td>
                                                    <td>{room.capacity}</td>
                                                    <td>{room.price}</td>
                                                    {/* <td>{room.available}</td> */}
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <p><a href="#" className="btn btn-outline-success text-dark"><Link to="/bookings">Proceed with booking</Link></a></p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ListAvailableRoomsComponent;