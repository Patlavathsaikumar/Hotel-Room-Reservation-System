import React, { Component } from "react";
import RoomsService from "../../../../api/services/RoomsService";
import { Formik, Form, Field, ErrorMessage } from 'formik';

class UpdateRoomInformationComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            id: this.props.params.id,
            roomName : '', 
            roomNo : '',
            roomType: '',
            description: '',
            floorNo: '',
            capacity: '',
            price: '',
            //available: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate(values)
    {
        let errors = {}

        if(!values.roomName){
            errors.roomName = 'Please enter the Room Name'
        } else if (values.roomName.length < 5) {
            errors.roomName = 'Please enter atleast 5 characters in Room Name'
        }

        if(!values.roomNo){
            errors.roomNo = 'Please enter the Room Number'
        } else if (values.roomNo.length < 3) {
            errors.roomName = 'Please enter atleast 3 digits in Room No'
        }

        if(!values.roomType){
            errors.roomType = 'Please enter the Room Type'
        } else if (values.roomType.length < 2) {
            errors.roomName = 'Please enter atleast 2 characters in Room Type'
        }

        if(!values.description){
            errors.description = 'Please enter the Description'
        } else if (values.description.length < 3) {
            errors.roomName = 'Please enter atleast 10 characters in Description'
        }

        if(!values.floorNo){
            errors.floorNo = 'Please enter the Floor Number'
        } else if (values.floorNo <= 0) {
            errors.roomName = 'Please enter a valid Floor Number'
        }

        if(!values.capacity){
            errors.capacity = 'Please enter the Capacity'
        } else if (values.capacity <= 0) {
            errors.roomName = 'Please enter a valid Capacity value'
        }

        if(!values.price){
            errors.price = 'Please enter the Price'
        } else if (values.price <= 0) {
            errors.roomName = 'Please enter a valid Price'
        }

        // if(!values.available){
        //     errors.available = 'Please enter if the room is available or not'
        // } else if (values.available) {
        //     errors.roomName = 'Please enter a valid Price'
        // }

        return errors;
    }

    componentDidMount()
    {
        console.log(RoomsService.getSpecificRoomData(this.state.id))
        RoomsService.getSpecificRoomData(this.state.id)
            .then(response => this.setState({
                roomName: response.data.roomName,
                roomNo: response.data.roomNo,
                roomType: response.data.roomType,
                description: response.data.description,
                floorNo: response.data.floorNo, 
                capacity: response.data.capacity, 
                price: response.data.price, 
                //available: response.data.available
            }))
    }

    onSubmit(values)
    {
        if(this.state.id === -1)
        {
            RoomsService.addRoom({
                id: this.state.id,
                roomName: values.roomName,
                roomNo: values.roomNo,
                roomType: values.roomType,
                description: values.description,
                floorNo: values.floorNo, 
                capacity: values.capacity, 
                price: values.price, 
                //available: values.available
            })
            .then(
                () => this.props.navigate('/admin-ListRooms')
            )
        }
        else
        {
            RoomsService.addRoom({
                id: this.state.id,
                roomName: values.roomName,
                roomNo: values.roomNo,
                roomType: values.roomType,
                description: values.description,
                floorNo: values.floorNo, 
                capacity: values.capacity, 
                price: values.price, 
                //available: values.available
            })
            .then(
                () => this.props.navigate('/admin-ListRooms')
            )
        }
    }

    render()
    {
        let { roomName, roomNo, roomType, description, floorNo, capacity, price, available } = this.state

        return (
            <div className="updateRoomInformation">
                <div>
                    <header id="admin-rooms-header" />
                </div>
                <h2>Please fill the Information in the below form</h2>
                <div className="container">
                    <Formik 
                        initialValues = {{ roomName, roomNo, roomType, description, floorNo, capacity, price, available }} 
                        onSubmit = {this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate = {this.validate}
                        enableReinitialize={true} >
                        {
                            (props) => (
                                <div className="container">
                                    <Form>
                                        <ErrorMessage name="roomName" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="roomNo" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="roomType" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="floorNo" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="capacity" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="price" component="div" className="alert alert-warning" />
                                        
                                        <fieldset className="form-group">
                                            <label>Room Name</label>
                                            <Field className="form-control" type="text" name="roomName" placeholder="Enter Room Name"/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Room Number</label>
                                            <Field className="form-control" type="text" name="roomNo" placeholder="Enter Room Number" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Room Type</label>
                                            <Field className="form-control" type="text" name="roomType" placeholder="Enter Room Type" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Room Description</label>
                                            <Field className="form-control" type="text" name="description" placeholder="Enter Room Description" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Floor Number</label>
                                            <Field className="form-control" type="text" name="floorNo" placeholder="Enter Floor Number" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Capacity</label>
                                            <Field className="form-control" type="text" name="capacity" placeholder="Enter Room Capacity" />
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Price</label>
                                            <Field className="form-control" type="text" name="price" placeholder="Enter Price of the Room" />
                                        </fieldset>
                                        {/* <fieldset className="form-group">
                                            <label>Is Available</label>
                                            <Field className="form-control" type="text" name="available" placeholder="Enter is Room Available" />
                                        </fieldset> */}
                                        <button className="btn btn-success" type="submit">Save</button>
                                    </Form>
                                </div>
                            )
                        }
                    </Formik>
                </div>
                <div>
                    empty
                    empty
                </div>
            </div>

        );
    }
}

export default UpdateRoomInformationComponent;