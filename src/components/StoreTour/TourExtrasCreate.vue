<template>
    <div class="container py-3" id="custom-cards">
        <form @submit.prevent="submit"> 
            <div class="row align-items-md-stretch">
                <div class="col-md-6">
                    <div class="h-100 p-3 text-white bg-dark rounded-3">
                        <h2>Que Incluye</h2>
                        <div class="row">
                            <div class=col-10>
                                <input 
                                type="text"
                                v-model="include"
                                class="form-control">
                            </div>
                            <div class=col-2>
                                <button type="button" class="btn btn-outline-light" @click="add(1)">Agregar</button>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <li v-for="inclu in form.include" :key="inclu">{{ inclu }}</li>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="h-100 p-3 text-black bg-light border rounded-3" style="color:black">
                        <h2>Actividades</h2>
                        <div class="row">
                            <div class=col-10>
                                <input 
                                type="text"
                                v-model="to_do"
                                class="form-control">
                            </div>
                            <div class=col-2>
                                <button type="button" class="btn btn-outline-secondary" @click="add(2)">Agregar</button>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <li v-for="doing in form.to_do" :key="doing">{{ doing }}</li>
                        </div>
                    </div>
                </div>
            </div>
            
            <br>

            <div class="row align-items-md-stretch">
                <div class="col-md-6">
                    <div class="h-100 p-3 text-black bg-light border rounded-3" style="color:black">
                        <h2>Requisitos</h2>
                        <div class="row">
                            <div class=col-10>
                                <input 
                                type="text"
                                v-model="requirements"
                                class="form-control">
                            </div>
                            <div class=col-2>
                                <button type="button" class="btn btn-outline-light" @click="add(4)">Agregar</button>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <li v-for="requirement in form.requirements" :key="requirement">{{ requirement }}</li>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="h-100 p-3 text-white bg-dark rounded-3">
                        <h2>Que llevar</h2>
                        <div class="row">
                            <div class=col-10>
                                <input 
                                type="text"
                                v-model="to_bring"
                                class="form-control">
                            </div>
                            <div class=col-2>
                                <button type="button" class="btn btn-outline-light" @click="add(3)">Agregar</button>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <li v-for="bring in form.to_bring" :key="bring">{{ bring }}</li>
                        </div>
                    </div>
                </div>
            </div>

            <br>
            

            <div class="row text-center">
                <div class="col ">
                    <!-- <button type="button" class="btn btn-danger px-4" style="margin-right: 5px">
                        Regresar
                        <i class="far fa-arrow-alt-circle-right"></i>
                    </button> -->

                    <button type="submit" class="btn btn-success px-4" style="margin-left: 5px">
                        Terminar
                        <i class="far fa-arrow-alt-circle-right"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

/* import {
    required,
} from "vuelidate/lib/validators"; */
import Tour from '@/models/tour.js'

export default {

    props: {
        tour_id: Number
    },

    data() {
        return {
            form: {
                include: [],
                not_include: [],
                to_do: [],
                to_bring: [],
                requirements: [],
                others: [],
            },
            include: "",
            not_include: "",
            to_do: "",
            to_bring: "",
            requirements: "",
            others: "",
        }
    },

    async mounted() {
        /* let response = await Country.getCountries();
        this.countries = response; */

        /* let response = await Place.get();
        this.places = response;

        let response = await TourCategory.get();
        this.categories = response; */
    },

    methods: {

        async add(type) {
            switch (type) {
                case 1:
                    this.form.include.push(this.include);
                    this.send('tour_includes', this.include);
                    this.include = "";
                    break;

                case 2:
                    this.form.to_do.push(this.to_do);
                    this.send('tour_activities', this.to_do);
                    this.to_do = "";
                    break;

                case 3:
                    this.form.to_bring.push(this.to_bring);
                    this.send('tour_to_bring', this.to_bring);
                    this.to_bring = "";
                    break;

                case 4:
                    this.form.requirements.push(this.requirements);
                    this.send('tour_requirements', this.requirements);
                    this.requirements = "";
                    break;

                default:
                    break;
            }
        },

        async send(table, description){
            let response = await Tour.storeExtras({
                'table': table,
                'description': description
                }, this.tour_id);
            console.log(response);
        },

        async submit() {

            /* let response = await Tour.storeExtras({'data': JSON.stringify(this.form)}, this.tour_id);
            console.log(response); */

            this.$router
                .push({
                    name: "register",
                    //params
                })
                .catch(() => {});  
        },
    },
}
</script>
