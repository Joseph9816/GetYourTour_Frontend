import axios from "axios";

class TourImages {

    static async store(data, id){
        let response = await axios
        .post("http://127.0.0.1:8001/api/getyourtour/tour-images/" + id, data, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
            }
        })
        .then(({ data }) => (response = data))
        .catch(errors => (response = errors));
        let res  = "";
        for (let i = 1; i < response.length; i++) {
            res += response[i];
        }
        return JSON.parse(res);
    }


}
export default TourImages;