import axios from "axios";

class Country {
    static async getCountries(){
        let response = await axios
        .get("http://127.0.0.1:8001/api/getyourtour/countries", {
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
export default Country;