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
                                
                                type="text" class="form-control" 
                                placeholder="¿A donde vas?" 
                                aria-label="¿A donde vas?">
                                <span class="input-group-text" id="basic-addon1">Ida</span>
                                <input
                             
                                type="date" class="form-control" 
                                placeholder="ida" 
                                aria-label="ida">
                                <span class="input-group-text" id="basic-addon1">Vuelta</span>
                                <input
                                
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


<style Scoped>
    #containerSearch{
        background: rgba(29, 53, 87, 1);
    }
</style>