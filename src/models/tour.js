import axios from "axios";

class Tour {
    static async store(data){
        let response = await axios
        .post("http://127.0.0.1:8001/api/getyourtour/tours", data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
        .then(({ data }) => (response = data))
        .catch(errors => (response = errors));
        let res  ="";
        for (let i = 1; i < response.length; i++) {
            res += response[i];
        }
        return JSON.parse(res);
    }
    
    static async storeExtras(data, id){
        let response = await axios
        .post("http://127.0.0.1:8001/api/getyourtour/tours/" + id, data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
        .then(({ data }) => (response = data))
        .catch(errors => (response = errors));
        let res  ="";
        for (let i = 1; i < response.length; i++) {
            res += response[i];
        }
        return JSON.parse(res);
    }
    static async searchDate(data){
        let response = await axios
        .put("http://127.0.0.1:8001/api/getyourtour/tours/search", data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
        .then(({ data }) => (response = data))
        .catch(errors => (response = errors));
        let res  ="";
        for (let i = 1; i < response.length; i++) {
            res += response[i];
        }
        return JSON.parse(res);
    }
    
    static async get(id){
        let response = await axios
        .get("http://127.0.0.1:8001/api/getyourtour/tours/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
        .then(({ data }) => (response = data))
        .catch(errors => (response = errors));
        let res  ="";
        for (let i = 1; i < response.length; i++) {
            res += response[i];
        }
        return JSON.parse(res);
    }
    
    static async getExtra(id, data){
        let response = await axios
        .post("http://127.0.0.1:8001/api/getyourtour/tours/extra/" + id, data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
        .then(({ data }) => (response = data))
        .catch(errors => (response = errors));
        let res  ="";
        for (let i = 1; i < response.length; i++) {
            res += response[i];
        }
        return JSON.parse(res);
    }
}
export default Tour;