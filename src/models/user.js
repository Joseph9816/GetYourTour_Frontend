import axios from "axios";

class User {
    static async getUser(){
        let response = await axios
        .get("http://127.0.0.1:8001/api/getyourtour/users", {
            headers: {
                'Authorization': "Bearer " + localStorage.getItem('token')
            }
        })
        .then(({ data }) => (response = data))
        .catch(errors => (response = errors));
        return response;
    }
    
    static async uniqueEmail(email){
        let response = await axios
        .get("http://127.0.0.1:8001/api/getyourtour/users/unique-email/" + email, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
        .then(({ data }) => (response = data))
        .catch(errors => (response = errors));
        let res  =""
        for (let i = 1; i < response.length; i++) {
            res += response[i];
        }
        return res;
    }
    
    static async store(data){
        let response = await axios
        .post("http://127.0.0.1:8001/api/getyourtour/users", data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        })
        .then(({ data }) => (response = data))
        .catch(errors => (response = errors));
        let res  =""
        for (let i = 1; i < response.length; i++) {
            res += response[i];
        }
        return JSON.parse(res);
    }
}
export default User;