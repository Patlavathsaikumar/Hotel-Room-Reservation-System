import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/bookings"

class BookingsService{
    getBookingsData(userId){
        return axios.get(USER_API_BASE_URL+`/${userId}`);
    }

    addBooking(booking)
    {
        return axios.post(USER_API_BASE_URL, booking);
    }

    getAllBookings(){ 
        return axios.get(USER_API_BASE_URL)
    }
}
  
export default new BookingsService();