import { Component } from 'react';

import RoomsService from '../../../../api/services/RoomsService';

class ListAllRoomsComponent extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
            rooms: [],
            message: null
        }
        this.deleteRoomClicked = this.deleteRoomClicked.bind(this);
        this.updateRoomClicked = this.updateRoomClicked.bind(this);
        this.addRoomClicked = this.addRoomClicked.bind(this);
        this.refreshRooms = this.refreshRooms.bind(this);
    }

    componentDidMount() {
        this.refreshRooms();
    }

    refreshRooms()
    {
        RoomsService.getRoomsData().then((res) => {
            this.setState({ rooms: res.data });
        });
    }

    deleteRoomClicked(id, roomNo)
    {
        RoomsService.deleteRoom(id)
            .then(
                response => {
                    this.setState({message : `Delete of Room Number ${roomNo} Successful`});
                    this.refreshRooms();
                }
            )
    }

    updateRoomClicked(id)
    {
        this.props.navigate(`/admin-ListRooms/${id}`);
    }

    addRoomClicked()
    {
        this.props.navigate(`/admin-ListRooms/-1`);
    }

    render() {
        return (

            <div className="listAllRoomsComponent">
                <div>
                    <header id="admin-rooms-header" />
                </div>
                <div>
                    <h1 className="display-4"><em>Find rooms information below</em></h1>
                </div>
                <section>
                    <div>
                        { this.state.message && <div className='alert alert-success'>{this.state.message}</div> }
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
                                        <th>Action</th>
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
                                                    <td><button className='btn btn-primary' onClick={ () => this.updateRoomClicked(room.id, room.roomNo)}>Update</button><button className='btn btn-warning' onClick={ () => this.deleteRoomClicked(room.id, room.roomNo)}>Delete</button></td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            <div>
                                <button className="btn btn-outline-success text-dark" onClick={this.addRoomClicked}>Add a Room</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ListAllRoomsComponent;