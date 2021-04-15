<template>
    <div id="Search">
        <br>
        <div class="container-fluid" id="containerSearch">
            <div class="row">
                <div class="col">
                    <div id="backgroundSearch">
                        <form @submit.prevent="submit">
                            <div class="input-group mb-3">
                                <input 
                                v-model="place"
                                type="text" class="form-control" 
                                placeholder="¿A donde vas?" 
                                aria-label="¿A donde vas?">
                                <span class="input-group-text" id="basic-addon1">Ida</span>

                                <input
                                v-model="start_date"
                                type="date" class="form-control" 
                                placeholder="ida" 
                                aria-label="ida">
                                <span class="input-group-text" id="basic-addon1">Vuelta</span>

                                <input
                                v-model="end_date"
                                type="date" class="form-control" 
                                placeholder="vuelta"
                                aria-label="vuelta">

                                <input
                                type="submit" 
                                class="form-control btn btn-success" 
                                value="Buscar"
                                placeholder="Buscar"
                                aria-label="Buscar">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            place:"",
            start_date:"",
            end_date: "",
        }
    },
    methods: {
        submit(){

            localStorage.setItem("place", this.place);
            localStorage.setItem("start_date", this.start_date);
            localStorage.setItem("end_date", this.end_date);
            this.$router
                .push({
                    name: "Place",
                })
                .catch(() => {}); 
        }
    }
}
</script>

<style Scoped>
    #containerSearch{
        background: rgba(29, 53, 87, 1);
    }
</style>