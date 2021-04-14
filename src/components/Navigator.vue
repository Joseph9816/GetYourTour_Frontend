<template>
    <div id="nav">
        <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class="container-fluid">
                    <router-link to="/"><a class="navbar-brand" href="#"><img src="../assets/globe.png" alt="Logo" width="40px" height="40px"> GetYourTours</a></router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        </ul>
                        <form class="d-flex">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Carrito</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" data-bs-toggle="modal" data-bs-target="#exampleModal" href="#">Login</a>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/register"><a class="nav-link active">Registrarse</a></router-link>
                                    <!--<a class="nav-link active">Registrarse</a>-->
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>
