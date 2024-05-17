<template>
  <header-vue />

  <section class="container-fluid p-5">

  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title text-center">Unidad de Vinculación</h1>
          <div class="card-text">
            <section class="row">
              <h4 class="text-center">Ubicación</h4>
              <p class="text-justify col-md-6">
                Se encuentra en rectoría, cerca de la puerta principal.
              </p>

              <div class="col-md-6 text-center">
                <img style="width: auto; height: 150px;" src="../../assets/images/vinculacion.png" alt="tu navegador no soporta imagenes">
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">¿Qué hace?</h4>
              <div class="col-md-6 text-center">
                <img style="width: auto; height: 280px;" src="../../assets/images/becario.png" alt="tu navegador no soporta imagenes">
              </div>

              <div class="col-md-6">
                <p>
                  Se encarga de gestionar todas las actividades concernientes al ámbito laboral, a las que los estudiantes pueden aspirar, como prácticas profesionales o conseguir trabajo formal o de becario.
                </p>
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">Servicios que ofrece</h4>
              <div class="text-justify col-md-6">
                <ul>
                  <li>Gestionar prácticas profesionales.</li>
                  <li>Gestionar convenios con empresas.</li>
                  <li>Gestionar bolsa de trabajo ligada a CUCEI.</li>
                  <li>Gestionar charlas con empresas en CUCEI.</li>
                  <li>Organizar ferias del empleo (2 por año).</li>
                  <li>Gestionar visitas industriales a empresas.</li>
                  <li>Cursos y capacitaciones para estudiantes.</li>
                  <li>Exhibiciones empresariales para estudiantes.</li>
                </ul>
              </div>

              <div class="col-md-6 text-center">
                <img style="width: auto; height: 150px;" src="../../assets/images/bolsatrabajo.webp">
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">¿Cómo se realizan las prácticas?</h4>
              <div class="col-md-6 text-center">
                <img style="width: auto; height: 150px;" src="../../assets/images/tiempo.jpg" alt="tu navegador no soporta imagenes">
              </div>

              <div class="col-md-6">
                <ul>
                  <li>Contar con el 50% o 60% de los créditos (depende de la carrera).</li>
                  <li>Tener seguro facultativo.</li>
                </ul>
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