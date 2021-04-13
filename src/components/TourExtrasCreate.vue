<template>
    <div class="container py-3" id="custom-cards">
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
                            <button class="btn btn-outline-light" @click="add(1)">Agregar</button>
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
                    <h2>Que No Incluye</h2>
                    <div class="row">
                        <div class=col-10>
                            <input 
                            type="text"
                            v-model="not_include"
                            class="form-control">
                        </div>
                        <div class=col-2>
                            <button class="btn btn-outline-secondary" @click="add(2)">Agregar</button>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <li v-for="not in form.not_include" :key="not">{{ not }}</li>
                    </div>
                </div>
            </div>
        </div>
        
        <br>

        <div class="row align-items-md-stretch">
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
                            <button class="btn btn-outline-secondary" @click="add(3)">Agregar</button>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <li v-for="doing in form.to_do" :key="doing">{{ doing }}</li>
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
                            <button class="btn btn-outline-light" @click="add(4)">Agregar</button>
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
        
        <div class="row align-items-md-stretch">
            <div class="col-md-6">
                <div class="h-100 p-3 text-white bg-dark rounded-3">
                    <h2>Requisitos</h2>
                    <div class="row">
                        <div class=col-10>
                            <input 
                            type="text"
                            v-model="requirements"
                            class="form-control">
                        </div>
                        <div class=col-2>
                            <button class="btn btn-outline-light" @click="add(5)">Agregar</button>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <li v-for="requirement in form.requirements" :key="requirement">{{ requirement }}</li>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="h-100 p-3 text-black bg-light border rounded-3" style="color:black">
                    <h2>Otros</h2>
                    <div class="row">
                        <div class=col-10>
                            <input 
                            type="text"
                            v-model="others"
                            class="form-control">
                        </div>
                        <div class=col-2>
                            <button class="btn btn-outline-secondary" @click="add(6)">Agregar</button>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <li v-for="other in form.others" :key="other">{{ other }}</li>
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
                    Continuar
                    <i class="far fa-arrow-alt-circle-right"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import {
    required,
} from "vuelidate/lib/validators";

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

        add(type) {
            switch (type) {
                case 1:
                    this.form.include.push(this.include);
                    this.include = "";
                    break;

                case 2:
                    this.form.not_include.push(this.not_include);
                    this.include = "";
                    break;

                case 3:
                    this.form.to_do.push(this.to_do);
                    this.include = "";
                    break;

                case 4:
                    this.form.to_bring.push(this.to_bring);
                    this.include = "";
                    break;

                case 5:
                    this.form.requirements.push(this.requirements);
                    this.include = "";
                    break;

                case 6:
                    this.form.others.push(this.others);
                    this.include = "";
                    break;

                default:
                    break;
            }
        },

        async submit() {
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
        },
    },

    validations: {
        form: {
            include: {
                required,
            },
            not_include: {
                required,
            },
            to_do: {
                required,
            },
            to_bring: {
                required,
            },
            requirements: {
                required,
            },
            others: {
                required,
            },
        }
    }
}
</script>
