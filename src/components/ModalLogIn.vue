<template>
    <div id="modalLogIn">
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Iniciar sesión</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form  @submit.prevent="submit">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Correo Electronico</label>
                                <input 
                                    v-model="form.email"
                                    :class="{
                                        'is-invalid': $v.form.email.$error
                                    }"
                                    type="email"
                                    class="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    placeholder="ejemplo@correo.com"
                                    @keydown="$v.form.email.$touch()">

                                    <div v-if="$v.form.email.$error" class="invalid-feedback text-left">

                                        <div v-if="!$v.form.email.required">
                                            El campo de correo es
                                            obligatorio.
                                        </div>

                                        <div v-if="!$v.form.email.email">
                                            {{ this.form.email }} no es un correo
                                            válido.
                                            <br>
                                            Por ejemplo: ejemplo@servidor.com
                                        </div>
                                    </div>

                                <div id="emailHelp" class="form-text">No compartiremos tu correo con alguien más.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                <input
                                    v-model="form.password"
                                    :class="{
                                        'is-invalid': $v.form.password.$error
                                    }"
                                    type="password" 
                                    class="form-control" 
                                    id="exampleInputPassword1" 
                                    placeholder="Contraseña"
                                    @keydown="$v.form.password.$touch()">

                                    <div v-if="$v.form.password.$error" class="invalid-feedback text-left">

                                        <div v-if="!$v.form.password.required">
                                            El campo contraseña es
                                            obligatorio.
                                        </div>
                                    </div>
                            </div>
                            <div id="buttonSubmit">
                                <button type="submit" class="btn btn-success">Ingresar</button>
                                <p v-if="error" id="pError">Correo o Contraseña incorrectas</p>
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
    required,
    email,
} from "vuelidate/lib/validators";
import User from '@/models/user.js'

export default {
    
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
            error: false,
        }
    },
    methods: {
        async submit() {
            this.$v.form.$touch();

            if (this.$v.form.$invalid) {
                return;
            }
            let response = await User.login(this.form);
            let id = "", name = "", last_name = "", email = ""
            console.log(response);
            if(response.status == false){
                this.error=true;

            }else{
                let resp = JSON.parse(response);
                resp.forEach(res => {
                id = res.id;
                name = res.name;
                last_name = res.last_name;
                email = res.email;
                console.log(response);
                console.log(res);
                console.log(email);
                let next = 'Home';
                if(res.admin == 1) {
                    next = 'Administrator'
                }
                
                this.$router
                    .push({
                        name: next,
                        params : {
                            user: {
                                id: id,
                                name: name,
                                last_name: last_name,
                                email: email,
                            },
                            auth: {
                                logged: true
                            }
                        }
                    })
                    .catch(() => {}); 

            });
            }
        }
    },
    validations: {
        form:{
            email: {
                required,
                email,
            },

            password: {
                required,
            },
        }
    }
}

</script>

<style scoped>
.exampleModalLabel{
    color: black !important;
}
#buttonSubmit{
    text-align: center;
}
#pError{
    color: red;
}
</style>