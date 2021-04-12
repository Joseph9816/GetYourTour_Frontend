<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <br>
                <div class="card">
                    <h5 class="card-header" id="titleCardRegister">Regístrarse</h5>
                    <div class="card-body">
                      <h5 class="card-title">Ingrese sus datos</h5>
                        <form @submit.prevent="submit"> 

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><img src="../assets/name.png" alt="personalInformation" width="20px" height="20px"></span>
                                <input 
                                    v-model.trim="form.name" 
                                    :class="{
                                        'is-invalid': $v.form.name.$error
                                    }"
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Nombre"
                                    @keydown="$v.form.name.$touch()">

                                <div v-if="$v.form.name.$error" class="invalid-feedback text-left">

                                    <div v-if="!$v.form.name.required">
                                        El campo nombre es obligatorio.
                                    </div>

                                    <div v-else-if="!$v.form.name.maxLength">
                                        Nombre no sebe ser mayor que 50
                                        caracteres.
                                    </div>

                                    <div v-else-if="!$v.form.name.fullNameSyntax">
                                        No se permiten números ni caracteres
                                        especiales.
                                    </div>
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><img src="../assets/name.png" alt="personalInformation" width="20px" height="20px"></span>
                                <input 
                                    v-model="form.last_name"
                                    :class="{
                                        'is-invalid': $v.form.last_name.$error
                                    }"
                                    type="text" 
                                    class="form-control" 
                                    placeholder="Primer apellido"
                                    @keydown="$v.form.last_name.$touch()">

                                <div v-if="$v.form.last_name.$error" class="invalid-feedback text-left">

                                    <div v-if="!$v.form.last_name.required">
                                        El campo primer apellido es obligatorio.
                                    </div>

                                    <div v-else-if="!$v.form.last_name.maxLength">
                                        Primer apellido no sebe ser mayor que 100
                                        caracteres.
                                    </div>

                                    <div v-else-if="!$v.form.last_name.fullNameSyntax">
                                        No se permiten números ni caracteres
                                        especiales.
                                    </div>
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><img src="../assets/world.png" alt="personalInformation" width="20px" height="20px"></span>
                                <select
                                    class="form-control"
                                    v-model="form.country_id">
                                    <option v-for="country in countries" :key="country.code" :value="country.code">{{ country.name }}</option>
                                </select>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><img src="/assets/calendar.png" alt="date" width="20px" height="20px"></span>
                                <input 
                                    v-model="form.birth_day"
                                    :class="{
                                        'is-invalid': $v.form.birth_day.$error
                                    }"
                                    type="date"
                                    class="form-control" 
                                    placeholder="Fecha de nacimiento"
                                    @keydown="$v.form.birth_day.$touch()">

                                <div v-if="$v.form.birth_day.$error" class="invalid-feedback text-left">

                                    <div v-if="!$v.form.birth_day.required">
                                        El campo primer apellido es obligatorio.
                                    </div>
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input 
                                    v-model="form.email"
                                    :class="{
                                        'is-invalid': $v.form.email.$error
                                    }"
                                    type="email" 
                                    class="form-control" 
                                    placeholder="Correo"
                                    @change="$v.form.email.$touch()">

                                <div v-if="$v.form.email.$error" class="invalid-feedback text-left">

                                    <div v-if="!$v.form.email.required">
                                        El campo correo electrónico es
                                        obligatorio.
                                    </div>

                                    <div v-else-if="!$v.form.email.email">
                                        {{ this.form.email }} no es un correo
                                        válido.
                                        <br />
                                        Por ejemplo: ejemplo@servidor.com
                                    </div>

                                    <div v-else-if="!$v.form.email.unique">
                                        El correo electrónico ya ha sido
                                        registrado anteriormente.
                                    </div>
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><img src="../assets/padlock.png" alt="pssw" height="20px" width="20px"></span>
                                <input 
                                    v-model="form.password"
                                    :class="{
                                        'is-invalid': $v.form.password.$error
                                    }"
                                    type="password" 
                                    class="form-control" 
                                    placeholder="Contraseña"
                                    @keydown="$v.form.password.$touch()">

                                <div v-if="$v.form.password.$error" class="invalid-feedback text-left">

                                    <div v-if="!$v.form.password.required">
                                        El campo contraseña es
                                        obligatorio.
                                    </div>

                                    <div v-if="!$v.form.password.passwordSyntax">
                                        La contraseña debe cumplir con las siguientes indicaciones:<br>
                                        Minimo 8 caracteres<br>
                                        Maximo 32<br>
                                        Al menos una letra mayúscula<br>
                                        Al menos una letra minucula<br>
                                        Al menos un dígito<br>
                                        No espacios en blanco<br>
                                        Al menos 1 caracter especial
                                    </div>
                                </div>
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1"><img src="../assets/padlock.png" alt="pssw" height="20px" width="20px"></span>
                                <input 
                                    v-model="form.password_confirmation"
                                    :class="{
                                        'is-invalid': $v.form.password_confirmation.$error
                                    }"
                                    type="password" 
                                    class="form-control" 
                                    placeholder="Confirmar contraseña"
                                    @keydown="$v.form.password_confirmation.$touch()">

                                <div v-if="$v.form.password_confirmation.$error" class="invalid-feedback text-left">

                                    <div v-if="!$v.form.password_confirmation.required">
                                        El campo confirmar contraseña es
                                        obligatorio.
                                    </div>

                                    <div v-if="!$v.form.password_confirmation.confirmed">
                                        Las contraseñas no coinciden
                                    </div>
                                </div>
                            </div>

                            <div class="text-right mt-4">
                                <button type="button" class="btn btn-danger px-4">
                                    Regresar
                                    <i class="far fa-arrow-alt-circle-right"></i>
                                </button>

                                <button type="submit" class="btn btn-success px-4">
                                    Continuar
                                    <i class="far fa-arrow-alt-circle-right"></i>
                                </button>
                            </div>
                            <!-- <div  id="buttonsRegisterCard">
                                <a href="/index.html" class="btn btn-danger">Regresar</a>
                                <input type="submit" class="btn btn-success" value="Registrarse">
                            </div> -->
                        </form>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>

import {
    required,
    email,
    helpers,
    maxLength,
} from "vuelidate/lib/validators";
import Country from '@/models/country.js'
import User from '@/models/user.js'

const fullNameSyntax = helpers.regex(
    "fullNameSyntax",
    /^[a-zA-Z\u00C0-\u017F\s]+$/
); 

const passwordSyntax = helpers.regex(
    "passwordSyntax",
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@/$!%*?&])([A-Za-z\d$@$/!%*?&]|[^ ]){8,32}$/
); 

export default {

    data() {
        return {
            form: {
                name: "",
                last_name: "",
                country_id: "CR",
                birth_date: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            countries: [],
        }
    },

    async mounted() {
        let response = await Country.getCountries();
        this.countries = response;
    },

    methods: {

        async submit() {
            this.errors = null;

            this.$v.form.$touch();

            if (this.$v.form.$invalid) {
                return;
            }

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
                .catch(() => {}); 
        },
    },

    validations: {
        form: {

            name: {
                required,
                maxLength: maxLength(50),
                fullNameSyntax
            },

            last_name: {
                required,
                maxLength: maxLength(50),
                fullNameSyntax
            },

            birth_day: {
                required
            },

            email: {
                required,
                email,
                async unique(value) {
                    let response = await User.uniqueEmail(value);
                    console.log(response);
                    return !response.unique;
                } 
            },

            password: {
                required,
                //minLength: minLength(8),
               // maxLength: maxLength(32),
                passwordSyntax,
            },

            password_confirmation: {
                required,
                confirmed(value) {
                    return (value == this.form.password);
                }
            }
        }
    }
}
</script>


    <!--  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/vue@next"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="../models/validations.js"></script>   -->
