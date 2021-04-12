import axios from "axios";

class Token {
    static async getToken(){
        let response = await axios
        .post("http://127.0.0.1:8001/api/getyourtour/login", {
            'email': 'j.jose9816@gmail.com',
            'password': 'admin123'
        })
        .then(({ data }) => (response = data))
        .catch(errors => (response = errors));
        let res  =""
        for (let i = 11; i < response.length - 2; i++) {
            res += response[i];
        }
        return res;
    }
}
export default Token;