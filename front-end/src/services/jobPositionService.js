import axios from "axios";

export default class jobPositionService{
    getPositions(){
        return axios.get("http://localhost:8080/api/jobpositions/getall")
    }
    addPosition(position){
        return axios.post("http://localhost:8080/api/jobpositions/add",position)
    }
}