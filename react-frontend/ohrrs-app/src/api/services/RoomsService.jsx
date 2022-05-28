import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8080/rooms"

class RoomsService
{
    addRoom(room)
    {
        return axios.post(USER_API_BASE_URL, room);
    }

    deleteRoom(id)
    {
        return axios.delete(USER_API_BASE_URL + `/${id}`);
    }
    
    updateRoom(room, id)
    {
        return axios.put(USER_API_BASE_URL + `/${id}`, room);
    }

    getRoomsData()
    {
        return axios.get(USER_API_BASE_URL);
    }

    getSpecificRoomData(id)
    {
        return axios.get(USER_API_BASE_URL + `/${id}`)
    }
}

export default new RoomsService();