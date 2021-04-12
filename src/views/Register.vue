<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <br>
                <div class="card">
                    <h5 class="card-header" id="titleCardRegister">Regístrate</h5>
                    <div class="card-body">
                      <h5 class="card-title">Ingrese sus datos</h5>
                        <form action="" onsubmit="return validarCampos()"> 
                            <!-- <p> --> 
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><img src="../assets/name.png" alt="personalInformation" width="20px" height="20px"></span>
                                    <input 
                                        v-model="name" 
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Nombre" 
                                        aria-label="Nombre" 
                                        aria-describedby="basic-addon1" 
                                        onkeypress="return soloLetras(event)" 
                                        required>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><img src="../assets/name.png" alt="personalInformation" width="20px" height="20px"></span>
                                    <input 
                                        v-model="last_name"
                                        type="text" 
                                        class="form-control" 
                                        placeholder="Primer apellido" 
                                        aria-label="Primer apellido" 
                                        aria-describedby="basic-addon1" 
                                        onkeypress="return soloLetras(event)">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><img src="../assets/world.png" alt="personalInformation" width="20px" height="20px"></span>
                                    <input 
                                        v-model="country"
                                        type="text" 
                                        class="form-control" 
                                        placeholder="País" 
                                        aria-label="País" 
                                        aria-describedby="basic-addon1" 
                                        @keypress="soloLetras(event)">
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><img src="/assets/calendar.png" alt="date" width="20px" height="20px"></span>
                                    <input 
                                        v-model="birth_day"
                                        type="date"
                                        class="form-control" 
                                        placeholder="Fecha de nacimiento" 
                                        aria-label="Fecha de nacimiento" 
                                        aria-describedby="basic-addon1" 
                                        required>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input 
                                        v-model="email"
                                        type="email" 
                                        class="form-control" 
                                        placeholder="Correo" 
                                        aria-label="Correo" 
                                        aria-describedby="basic-addon1" 
                                        required>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><img src="../assets/padlock.png" alt="pssw" height="20px" width="20px"></span>
                                    <input 
                                        v-model="password"
                                        type="password" 
                                        class="form-control" 
                                        placeholder="Contraseña" 
                                        aria-label="Contraseña" 
                                        aria-describedby="basic-addon1" 
                                        id="contrasena" 
                                        required>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><img src="../assets/padlock.png" alt="pssw" height="20px" width="20px"></span>
                                    <input 
                                        v-model="password_confirmed"
                                        type="password" 
                                        class="form-control" 
                                        placeholder="Comprobar contraseña" 
                                        aria-label="Comprobar contraseña" 
                                        aria-describedby="basic-addon1" 
                                        id="contrasena" 
                                        required>
                                </div>
                           <!--  </p> -->
                            <div  id="buttonsRegisterCard">
                                <a href="/index.html" class="btn btn-danger">Regresar</a>
                                <input type="submit" class="btn btn-success" value="Registrarse">
                            </div>
                        </form>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</template>

<script>

import {
    /* required,
    minLength,
    email,
    numeric,
    helpers,
    maxLength,
    requiredIf */
} from "vuelidate";

export default {
    data() {
        return {
            form: {
                name: "",
                last_name: "",
                country: 1,
                birth_date: "",
                email: "",
                password: "",
                password_confirmed: ""
            }
        }
    },
    mounted() {

    },
    methods: {
        soloLetras() {
            
            if(!/^([a-zA-Z])*$/.test(this.form.country)){
                this.form.country = this.form.country.slice(0, -1);
            }
        }
    },
}
</script>


    <!--  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/vue@next"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="../models/validations.js"></script>   -->
