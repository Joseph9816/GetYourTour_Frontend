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
}
export default Tour;