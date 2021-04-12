import axios from "axios";

class Country {
    static async getCountries(){
        let response = await axios
        .get("http://127.0.0.1:8000/api/getyourtour/users", {
            headers: {
                'Authorization': "Bearer "
            }
        })
        .then(({ data }) => (response = data))
        .catch(errors => (response = errors));
        return response;
    }
}
export default Country;