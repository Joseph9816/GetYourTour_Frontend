<template>
    <div class="container"><br><br><br><br>
        <h1 class="pb-2 border-bottom text-center" style="color:black">Nuevo Tour</h1>
        
        <div class="container" id="featured-3" v-if="tour == ''">
            <form @submit.prevent="submit"> 
                <div class="row g-5 py-3">
                    <div class="feature col">
                        <div class="row align-items-md-stretch">
                            <div class="col-md-12">
                                <div class="h-100 p-5 text-white bg-dark rounded-3">

                                    <h2>Información del Tour</h2>

                                    <div class="row">
                                        <div class="col-4">
                                            <label class="required">Nombre del tour</label>
                                            <input
                                            v-model="form.name"
                                            class="form-control"
                                            :class="{
                                                'is-invalid': $v.form.name.$error
                                            }"
                                            type="text"
                                            @keydown="$v.form.name.$touch()">

                                            <div v-if="$v.form.name.$error" class="invalid-feedback text-left">
                                                <div v-if="!$v.form.name.required">
                                                    Nombre del tour es
                                                    obligatorio.
                                                </div>
                                                <div v-if="!$v.form.name.maxLength">
                                                    Nombre no debe ser mayor de 100 caracteres.
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-4">
                                            <label class="required">Fecha</label>
                                            <input
                                            v-model="form.start_date"
                                            class="form-control"
                                            :class="{
                                                'is-invalid': $v.form.start_date.$error
                                            }"
                                            type="date"
                                            @keydown="$v.form.start_date.$touch()">

                                            <div v-if="$v.form.start_date.$error" class="invalid-feedback text-left">
                                                <div v-if="!$v.form.start_date.required">
                                                    Fecha es
                                                    obligatorio.
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-2">
                                            <label class="required">Hora de inicio</label>
                                            <input
                                            v-model="form.start_hour"
                                            class="form-control"
                                            :class="{
                                                'is-invalid': $v.form.start_hour.$error
                                            }"
                                            type="time"
                                            @keydown="$v.form.start_hour.$touch()">

                                            <div v-if="$v.form.start_hour.$error" class="invalid-feedback text-left">
                                                <div v-if="!$v.form.start_hour.required">
                                                    Hora de inicio es
                                                    obligatorio.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="col-2">
                                            <label class="required">Duración</label>
                                            <input
                                            v-model="form.duration"
                                            class="form-control"
                                            :class="{
                                                'is-invalid': $v.form.duration.$error
                                            }"
                                            type="time"
                                            @keydown="$v.form.duration.$touch()">

                                            <div v-if="$v.form.duration.$error" class="invalid-feedback text-left">
                                                <div v-if="!$v.form.duration.required">
                                                    Duración es
                                                    obligatorio.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col">
                                            <label class="required">Pais</label>
                                            <select
                                                class="form-control"
                                                v-model="form.country_id">
                                                <option v-for="country in countries" :key="country.code" :value="country.code">{{ country.name }}</option>
                                            </select>
                                        </div>

                                        <div class="col">
                                            <label class="required">Lugar</label>
                                            <input
                                            v-model="place"
                                            class="form-control"
                                            :class="{
                                                'is-invalid': $v.place.$error
                                            }"
                                            type="text"
                                            @keydown="$v.place.$touch()">

                                            <div v-if="$v.place.$error" class="invalid-feedback text-left">
                                                <div v-if="!$v.place.required">
                                                    Lugar es
                                                    obligatorio.
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col">
                                            <label class="required">Capacidad</label>
                                            <input
                                            v-model="form.capacity"
                                            class="form-control"
                                            :class="{
                                                'is-invalid': $v.form.capacity.$error
                                            }"
                                            type="number"
                                            @keydown="$v.form.capacity.$touch()">

                                            <div v-if="$v.form.capacity.$error" class="invalid-feedback text-left">
                                                <div v-if="!$v.form.capacity.required">
                                                    Capacidad es
                                                    obligatorio.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-2">
                                            <label class="required">Categoria</label>
                                            <input
                                            v-model="tour_category"
                                            class="form-control"
                                            :class="{
                                                'is-invalid': $v.tour_category.$error
                                            }"
                                            type="text"
                                            @keydown="$v.tour_category.$touch()">

                                            <div v-if="$v.tour_category.$error" class="invalid-feedback text-left">
                                                <div v-if="!$v.tour_category.required">
                                                    Categoria es
                                                    obligatorio.
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-4">
                                            <label class="required">Descripción</label>
                                        <textarea
                                            v-model="form.description"
                                            class="form-control"
                                            :class="{
                                                'is-invalid': $v.form.description.$error
                                            }"
                                            @keydown="$v.form.description.$touch()"></textarea>

                                            <div v-if="$v.form.description.$error" class="invalid-feedback text-left">
                                                <div v-if="!$v.form.description.required">
                                                    Descripción es
                                                    obligatorio.
                                                </div>
                                                <div v-if="!$v.form.description.maxLength">
                                                    Descripción no debe ser mayor que 250 caracteres.
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-4">
                                            <label class="required">Punto de encuentro</label>
                                        <textarea
                                            v-model="form.meeting_point"
                                            class="form-control"
                                            :class="{
                                                'is-invalid': $v.form.meeting_point.$error
                                            }"
                                            @keydown="$v.form.meeting_point.$touch()"></textarea>

                                            <div v-if="$v.form.meeting_point.$error" class="invalid-feedback text-left">
                                                <div v-if="!$v.form.meeting_point.required">
                                                    Punto de encuentro es
                                                    obligatorio.
                                                </div>
                                                <div v-if="!$v.form.meeting_point.maxLength">
                                                    Punto de encuentro no debe ser mayor que 250 caracteres.
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-2">
                                            <label class="required">Precio por persona</label>
                                            <input
                                            v-model="form.price"
                                            class="form-control"
                                            :class="{
                                                'is-invalid': $v.form.price.$error
                                            }"
                                            type="number"
                                            @keydown="$v.form.price.$touch()">

                                            <div v-if="$v.form.price.$error" class="invalid-feedback text-left">
                                                <div v-if="!$v.form.price.required">
                                                    Precio por persona es
                                                    obligatorio.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <br>

                                    <div class="row text-center">
                                        <div class="col ">
                                            <router-link to="/administrator"> <button type="button" class="btn btn-danger px-4" style="margin-right: 5px">
                                                Regresar
                                                <i class="far fa-arrow-alt-circle-right"></i>
                                            </button></router-link>

                                            <button type="submit" class="btn btn-success px-4" style="margin-left: 5px">
                                                Continuar
                                                <i class="far fa-arrow-alt-circle-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <TourImagesCreate :tour_id="tour" v-if="tour != ''" />
        <TourExtrasCreate :tour_id="tour" v-if="tour != ''" />
    </div>
</template>

<script>

import {
    required,
    numeric,
    maxLength,
} from "vuelidate/lib/validators";
import Country from '@/models/country.js'
import Tour from '@/models/tour.js'
import TourCategory from '@/models/tourCategory.js'
import Place from '@/models/place.js'
import TourExtrasCreate from '@/components/StoreTour/TourExtrasCreate'
import TourImagesCreate from '@/components/StoreTour/TourImagesCreate'
//import User from '@/models/user.js'



export default {

    data() {
        return {
            tour: 1,
            form: {
                name: "",
                description: "",
                start_date: "2021-01-01",
                start_hour: "00:00",
                duration: "00:00",
                meeting_point: "",
                price: "",
                capacity: 1,
                tour_category_id: "",
                place_id: "",
                country_id: "CR",
            },
            countries: "",
            tour_category: "",
            place: "",
        }
    },

    async mounted() {
        let response = await Country.getCountries();
        this.countries = response;
    },

    components: {
        TourExtrasCreate,
        TourImagesCreate
    },

    methods: {
        asignTourId(id) {
            this.tour_id = id;
            console.log(id);
        },

        async submit() {
            this.errors = null;

            this.$v.form.$touch();

            if (this.$v.form.$invalid) {
                return;
            }

            let response = await TourCategory.store({'name': this.tour_category});
            let response2 = await Place.store({'name': this.place});
            if(response.status && response2.status) {

                this.form.tour_category_id = response.tour_category_id;
                this.form.place_id = response2.place_id;

                let response3 = await Tour.store(this.form);
                this.tour = parseInt(response3.tour_id);
            }
            
            /* let response =  *///await Tour.store(this.form);
            //$this.$emit('tour_id', response.id);
            /* this.$router
                .push({
                    name: "home",
                    //params
                })
                .catch(() => {});  */
        },

        /* async submit() {
            this.errors = null;

            this.$v.form.$touch();

            if (this.$v.form.$invalid) {
                return;
            }
/* 
            let response = await User.store(this.form);
            let id = "", name = "", last_name = "", email = ""

            response.forEach(res => {
                id = res.id;
                name = res.name;
                last_name = res.last_name;
                email = res.email;
            });

            this.$router
                .push({
                    name: "home",
                    params : {
                        user: {
                            id: id,
                            name: name,
                            last_name: last_name,
                            email: email
                        },
                        auth: {
                            logged: true
                        }
                    }
                })
                .catch(() => {});  */
       /* }, */
    },

    validations: {
        form: {
            name: {
                required,
                maxLength: maxLength(100)
            },
            description: {
                required,
                maxLength: maxLength(250)
            },
            start_date: {
                required,
            },
            start_hour: {
                required,
            },
            duration: {
                required,
            },
            meeting_point: {
                required,
                maxLength: maxLength(250)
            },
            price: {
                required,
                numeric,
            },
            capacity: {
                required,
                numeric
            },
            country_id: {
                required,
            },
        },
        tour_category: {
            required,
        },
        place: {
            required,
        },
    },
}
</script>
