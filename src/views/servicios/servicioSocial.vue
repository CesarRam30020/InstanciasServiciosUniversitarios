<template>
  <header-vue />

  <section class="container-fluid p-5">

    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title text-center">Unidad de Servicio Social</h1>
            <div class="card-text">
              <section class="row">
                <h4 class="text-center">¿Cuándo se puede hacer?</h4>
                <p class="text-justify col-md-6">
                  Cuando el alumno cumpla el 60% de créditos. <br>
                  Algunas carreras necesitan tener minimo el 70% de créditos.
                </p>

                <div class="col-md-6 text-center">
                  <img class="img-custom" src="../../assets/images/question.png" alt="tu navegador no soporta imagenes">
                </div>
              </section>

              <section class="row">
                <h4 class="text-center">Requisitos</h4>
                <div class="col-md-6 text-center">
                  <img class="img-custom" src="../../assets/images/requisitos.png" alt="tu navegador no soporta imagenes">
                </div>

                <div class="col-md-6">
                  <p>
                    <ul>
                      <li>Tener el 60% de créditos.</li>
                      <li>Ser estudiante activo (que no estes dado de baja administrativa).</li>
                      <li>Ser estudiante regular.</li>                    
                    </ul>
                  </p>
                </div>
              </section>

              <section class="row">
                <h4 class="text-center">Tiempo, Fechas</h4>
                <div class="col-md-6">
                  <ul>
                    <li>Se debe de cumplir un total de 480 hrs.</li>
                    <li>
                      La fecha exacta de las convocatorias depende el semestre en el que se este cursando, mayormente estas son publicadas por el área de “Servicio social”
                    </li>
                  </ul>
                </div>

                <div class="col-md-6 text-center">
                  <img class="img-custom" src="../../assets/images/requisitos.png" alt="tu navegador no soporta imagenes">
                </div>
              </section>

              <section class="row">
                <h4 class="text-center">¿De qué trata y por que se hace el servicio social?</h4>
                <div class="col-md-6 text-center">
                  <img style="width: auto; height: 250px;" src="../../assets/images/servicio_social.png" alt="tu navegador no soporta imagenes">
                </div>

                <div class="col-md-6">
                  <p>
                    Las actividades dependen en donde se realice el servicio social, por ejemplo, si el servicio social es en CUCEI seria apoyar en el área administrativa, si es otro lado dependerá de la dependencia. <br><br>
                    La prestación del servicio social permite al estudiante y a la Universidad reintegrar a la sociedad parte de los apoyos que el estudiante recibe para su formación profesional, por lo que en la formulación de los programas se privilegian aquellos enfocados al servicio comunitario. Es una retribución al gobierno.
                  </p>
                </div>
              </section>

              <section class="row">
                <h4 class="text-center">¿Dónde puedo realizar este servicio?</h4>
                <div class="card col-md-4">
                  <div class="card-body">
                    <b class="card-title text-center"><p class="text-center">CUCEI</p></b>
                    <div class="card-text">
                      Laboratorio, Oficinas (Se solicitan mayormente en las oficinas del edificio A), condonaciones, Investigable etc.
                    </div>
                  </div>
                </div>

                <div class="card col-md-4">
                  <div class="card-body">
                    <b class="card-title text-center"><p class="text-center">Dependencias</p></b>
                    <div class="card-text">
                      Asociaciones civiles, escuelas o preparatorias asociadas a UdeG, cualquier dependencia que tenga un convenio con UdeG.
                    </div>
                  </div>
                </div>

                <div class="card col-md-4">
                  <div class="card-body">
                    <b class="card-title text-center"><p class="text-center text-danger">Empresas Privadas</p></b>
                    <div class="card-text">
                      El lugar donde se realice el servicio debe de estar asociado a la UdeG, de otro modo, no se permitirá a empresas privadas.
                    </div>
                  </div>
                </div>
              </section>

              <section class="row">
                <h4 class="text-center">Proceso</h4>
                <div class="col-md-6 text-center">
                  <img style="width: auto; height: 250px;" src="../../assets/images/oficio.png" alt="tu navegador no soporta imagenes">
                </div>

                <div class="col-md-6">
                  <p>
                    Agenda de actividades Alumnos <br>
                    mas información <a href="http://ss.siiau.udg.mx" target="_blank">aquí</a>
                  </p>
                  <p>
                    Hacer tramute a dependencias. <br>
                    Estas deben ser validas y aceptadas.
                  </p>
                  <p>
                    Publicacion de agenda, selección de plazas, entrega de oficios de comision (Todo el tramite es en linea hasta este punto). Y la recepción de oficios de comisión.
                  </p>
                  <p>
                    Inicio del servicio social.
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
import HeaderVue from '../Header.vue'

export default {
  components: { HeaderVue }
}
</script>

<style>
.img-custom {
  width: auto;
  height: 100px;
}
</style>