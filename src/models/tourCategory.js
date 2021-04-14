import axios from "axios";

class TourCategory {

    static async store(data){
        let response = await axios
        .post("http://127.0.0.1:8001/api/getyourtour/tour-categories", data, {
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
export default TourCategory;

/*

            let response = await TourCategory.store({'name': this.tour_category});
            let response2 = await Place.store({'name': this.place});
                console.log(response);
                console.log(response2);
            if(response.status && response2.status) {
                /* console.log(response.tour_category_id);
                console.log(response2.place_id); 
                response.forEach(res => {
                    this.form.tour_category_id = res.tour_category_id;
                });
                response2.forEach(res => {
                this.form.place_id = res.place_id;
                });
                //this.form.tour_category_id = response.tour_category_id;
                //this.form.place_id = response2.place_id;
                let response = await Tour.store(this.form);
                this.tour = response.tour_id;
            }*/