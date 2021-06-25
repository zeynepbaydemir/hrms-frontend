import axios from "axios";


export default class JobCandidateService{
    getJobCandidates(){
        return axios.get("http://localhost:8080/api/candidates/getall")
    }
    addCandidate(candidate){
        return axios.post("http://localhost:8080/api/candidates/add",candidate)
    }
}