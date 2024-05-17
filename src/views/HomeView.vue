<template>
  <header-vue />

  <section class="container-fluid p-5">
    
    <div class="row">
      <div class="col-md-2 p-3">
        <router-link to="/servicio-social" class="card card-clickeable">
          <div class="card-body">
            <img class="card-img-top" src="../assets/images/rectoria.jpg" alt="imagen no soportada" height="auto">
            <h2 class="card-title text-center">Unidad de Servicio Socail</h2>
            <!-- <div class="card-text ocultar">Unidad</div> -->
          </div>
        </router-link>
      </div>

      <div class="col-md-2 p-3">
        <router-link to="/biblioteca" class="card card-clickeable">
          <div class="card-body">
            <img class="card-img-top" src="../assets/images/biblioteca.jpeg" alt="imagen no soportada" height="auto">
            <h2 class="card-title text-center">Biblioteca</h2>
            <!-- <div class="card-text ocultar">Unidad</div> -->
          </div>
        </router-link>
      </div>

      <div class="col-md-2 p-3">
        <router-link to="/laboratorios-medicos" class="card card-clickeable">
          <div class="card-body">
            <img class="card-img-top" src="../assets/images/laboratorios_clinicos.jpeg" alt="imagen no soportada" height="auto">
            <h2 class="card-title text-center">Unidad de servicios médicos y laboratorio de análisis clínicos</h2>
            <!-- <div class="card-text ocultar">Unidad</div> -->
          </div>
        </router-link>
      </div>

      <div class="col-md-2 p-3">
        <router-link to="/actividades-culturales" class="card card-clickeable">
          <div class="card-body">
            <img class="card-img-top" src="../assets/images/actividades_deportivas.jpg" alt="imagen no soportada" height="auto">
            <h2 class="card-title text-center">Módulo de actividades culturales y deportivas</h2>
            <!-- <div class="card-text ocultar">Unidad</div> -->
          </div>
        </router-link>
      </div>

      <div class="col-md-2 p-3">
        <router-link to="/practicas-profesionales" class="card card-clickeable">
          <div class="card-body">
            <img class="card-img-top" src="../assets/images/vinculacion.jpg" alt="imagen no soportada" height="auto">
            <h2 class="card-title text-center">Unidad de vinculación y prácticas profesionales</h2>
            <!-- <div class="card-text ocultar">Unidad</div> -->
          </div>
        </router-link>
      </div>

      <div class="col-md-2 p-3">
        <router-link to="/control-escolar" class="card card-clickeable">
          <div class="card-body">
            <img class="card-img-top" src="../assets/images/control_escolar.jpeg" alt="imagen no soportada" height="auto">
            <h2 class="card-title text-center">Control escolar</h2>
            <!-- <div class="card-text ocultar">Unidad</div> -->
          </div>
        </router-link>
      </div>

    </div>

    <div class="row">
      <div class="col-md-2 p-3">
        <router-link to="/becas-intercambios" class="card card-clickeable">
          <div class="card-body">
            <img class="card-img-top" src="../assets/images/becas_intercambios.jpeg" alt="imagen no soportada" height="auto">
            <h2 class="card-title text-center">Unidad de becas e intercambios</h2>
            <!-- <div class="card-text ocultar">Unidad</div> -->
          </div>
        </router-link>
      </div>

      <div class="col-md-2 p-3">
        <router-link to="/tecnologias-aprendizaje" class="card card-clickeable">
          <div class="card-body">
            <img class="card-img-top" src="../assets/images/CTA.png" alt="imagen no soportada" height="auto">
            <h2 class="card-title text-center">Coordinación de tecnologías para el aprendizaje</h2>
            <!-- <div class="card-text ocultar">Unidad</div> -->
          </div>
        </router-link>
      </div>

      <div class="col-md-2 p-3">
        <router-link to="/centro-idiomas" class="card card-clickeable">
          <div class="card-body">
            <img class="card-img-top" src="../assets/images/centro_idiomas.jpeg" alt="imagen no soportada" height="auto">
            <h2 class="card-title text-center">Centro de idiomas</h2>
            <!-- <div class="card-text ocultar">Unidad</div> -->
          </div>
        </router-link>
      </div>

      <div class="col-md-2 p-3">
        <router-link to="/divtic" class="card card-clickeable">
          <div class="card-body">
            <img class="card-img-top" src="../assets/images/divtic.jpg" alt="imagen no soportada" height="auto">
            <h2 class="card-title text-center">DIVTIC</h2>
            <!-- <div class="card-text ocultar">Unidad</div> -->
          </div>
        </router-link>
      </div>

      <div class="col-md-2 p-3">
        <router-link to="/laboratorios" class="card card-clickeable">
          <div class="card-body">
            <img class="card-img-top" src="../assets/images/lab.png" alt="imagen no soportada" height="auto">
            <h2 class="card-title text-center">Laboratorios</h2>
            <!-- <div class="card-text ocultar">Unidad</div> -->
          </div>
        </router-link>
      </div>

      <div class="col-md-2 p-3">
        <router-link to="/egresados" class="card card-clickeable">
          <div class="card-body">
            <img class="card-img-top" src="../assets/images/egresados.jpg" alt="imagen no soportada" height="auto">
            <h2 class="card-title text-center">Egresados</h2>
            <!-- <div class="card-text ocultar">Unidad</div> -->
          </div>
        </router-link>
      </div>
    </div>

    <div class="row">
      <router-link to="/cucei" class="col-md-2 p-3">
        <div class="card card-clickeable">
          <div class="card-body">
            <img class="card-img-top" src="../assets/images/CUCEI.png" alt="imagen no soportada" height="auto">
            <h2 class="card-title text-center">CUCEI</h2>
            <!-- <div class="card-text ocultar">Unidad</div> -->
          </div>
        </div>
      </router-link>
    </div>

  </section>

  <footer-vue/>
</template>

<script>
import HeaderVue from './Header.vue'
import FooterVue from './Footer.vue'
export default {
  components: { HeaderVue, FooterVue }
}
</script>

<style>
.card-clickeable:hover {
  background-color: lightgray;
  cursor: pointer;
}

.card-img-top {
  width: 50px;
  height: auto;
}
 
/*@media (max-width: 768px) {
  .ocultar {
    display: none;
  }
} */
</style>