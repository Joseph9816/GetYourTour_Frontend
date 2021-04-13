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
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Correo Electronico</label>
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    placeholder="ejemplo@correo.com">
                                <div id="emailHelp" class="form-text">No compartiremos tu correo con alguien más.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña">
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.exampleModalLabel{
    color: black !important;
}
</style>