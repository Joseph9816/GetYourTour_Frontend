<template>
    <div id="PlaceView">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <table class="table table-dark table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha de inicio</th>
                            <th scope="col">Hora inicio</th>
                            <th scope="col">Duración</th>
                            </tr> 
                        </thead>
                        <tbody>
                            <tr v-for="t in tour" :key="t.id"> 
                                <th scope="row">{{t.name}}</th>
                                <td>{{t.start_date}}</td>
                                <td>{{t.start_hour}}</td>
                                <td>{{t.duration}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import  Tour  from "@/models/tour.js";
export default {
    data(){
        return { 
            tour: []
        }
    },
    async mounted(){
        
        this.tour = await Tour.searchDate({place: localStorage.getItem("place"), start_date:localStorage.getItem("start_date"), end_date:localStorage.getItem("end_date")});
    }
};


</script>

