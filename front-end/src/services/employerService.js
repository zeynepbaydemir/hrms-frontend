import axios from "axios";


export default class EmployerService{

    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }
    addEmployer(employer){
        return axios.post("http://localhost:8080/api/employers/add",employer)
    }
}