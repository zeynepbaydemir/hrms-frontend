import axios from "axios";


export default class candidateService{
    getCandidates(){
        return axios.get("http://localhost:8080/api/candidates/getall")
    }
    addCandidate(candidate){
        return axios.post("http://localhost:8080/api/candidates/add",candidate)
    }
}