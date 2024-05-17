<template>
  <header-vue />
  
  <section class="container-fluid p-5">

  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title text-center">Control Escolar</h1>
          <div class="card-text">
            <section class="row">
              <h4 class="text-center">Ubicación</h4>
              <div class="col-md-12 text-center">
                <img style="width: 100%; height: auto;" src="../../assets/images/control_escolar_map.png" alt="tu navegador no soporta imagenes">
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">¿Qué hace?</h4>
              <div class="col-md-12">
                <p>
                  En el Control escolar se atiende desde el proceso de ingreso selección y dictamen de de los aspirantes a estudiantes de la Universidad de Guadalajara, una vez como alumnos brinda los servicios que el alumno requiere durante su trayectoria escolar como control de materias horarios calificaciones documentos que los acredita como alumnos y posteriormente los acompañan en su proceso de obtención de grado y titulación. <br><br>
                  También se registra y organiza la información de los participantes y usuarios de los programas de capacitación y profesionalización que ofrece la Udg para elaborar los documentos probatorios que avalen el aprovechamiento de los mismos y generar las estadísticas respectivas.
                </p>
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">¿Qué servicios y trámites ofrece?</h4>
              <div class="text-center col-md-12">
                <img src="../../assets/images/tramites.png" alt="...">
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">¿Qué costos, tiempos y procesos tienen?</h4>
              <div class="col-md-6 text-center">
                <img style="width: auto; height: 150px;" src="../../assets/images/tramitesdisp.png" alt="tu navegador no soporta imagenes">
              </div>

              <div class="col-md-6">
                <p>
                  El costo y tiempo es diferente para cada trámite y va desde los 36 a los 1004 pesos y el proceso también depende del trámite a realizar pero usualmente requiere que ingreses a SIATCE y veas el calendario para ver si el trámite se encuentra disponible si se encuentra disponible podrás realizarlo a través de la página y ahi te diran los pasos a realizar.
                </p>
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
import HeaderVue from "../Header.vue";
export default {
  components: { HeaderVue }
}
</script>

<style>

</style>