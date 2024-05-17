<template>
  <header-vue />

  <section class="container-fluid p-5">

  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title text-center">Centro de Idiomas</h1>
          <div class="card-text">
            <section class="row">
              <h4 class="text-center">Ubicación</h4>
              <p class="text-justify col-md-6">
                Parte alta de la biblioteca la cual esta ubicada al lado del edificio A.
              </p>

              <div class="col-md-6 text-center">
                <img style="width: auto; height: 150px;" src="../../assets/images/centro_idiomas.jpeg" alt="tu navegador no soporta imagenes">
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">Servicios que ofrece</h4>
              <div class="col-md-6 text-center">
                <img style="width: auto; height: 225px;" src="../../assets/images/libros.jpg" alt="tu navegador no soporta imagenes">
              </div>

              <div class="col-md-6">
                <ul>
                  <li>Ingles</li>
                  <li>Francés</li>
                  <li>Alemán</li>
                  <li>Portugués</li>
                  <li>Japonés</li>
                  <li>Italiano</li>
                  <li>Ruso</li>
                  <li>Chino</li>
                  <li>Coreano</li>
                </ul>
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">¿Cómo acceder a ellos?</h4>
              <p class="text-justify col-md-6">
                Deberas realizar una peticion firmando un "contrato" en el que te comprometes a cumplir con un minimo de avance en el programa al que quieres acceder.
              </p>

              <div class="col-md-6 text-center">
                <img style="width: auto; height: 250px;" src="../../assets/images/contrato.png" alt="tu navegador no soporta imagenes">
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>

  </section>
</template>

<script>
import HeaderVue from '../Header.vue'

export default {
  components: { HeaderVue }
}
</script>

<style>

</style>