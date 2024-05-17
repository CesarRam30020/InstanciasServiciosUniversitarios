<template>
  <header-vue/>

  <section class="container-fluid p-5">

  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title text-center">Egresados</h1>
          <div class="card-text">
            <section class="row">
              <h4 class="text-center">Ubicación</h4>
              <p class="text-justify col-md-6">
                Blvd. Marcelino García Barragán #1421, esq Calzada Olímpica, Edificio A (Rectoría), es por parte de las aulas hasta el final.
              </p>

              <div class="col-md-6 text-center">
                <img style="width: auto; height: 250px;" src="../../assets/images/egresados_ubica.png" alt="tu navegador no soporta imagenes">
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">Proceso de Egreso</h4>
              <div class="col-md-12">
                Todos los procesos de titulación inician en la Coordinación de Carrera de la cual egresaste. <br>
                Contar con el 100% de créditos obligatorios de tu plan de estudios o carrera. <br>
                Los egresados de las carreras deben acudir a este órgano, por ejemplo ya después de haber cumplido con todos los créditos ya se puede hacer este trámite. <br>
                La modalidad de titulación es en coordinación, en el órgano solo se encargan de la parte administrativa para tener completos los expedientes.
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">Pasos para titulación desde que terminas créditos</h4>
              <div class="text-justify col-md-6">
                <ul>
                  <li>Accede a TITULACION.CUCEI.UDG.MX</li>
                  <li>Cambio de estatus</li>
                  <li>Actualización de datos personales y selección de modalidad de titulación.</li>
                  <li>Sube tus documentos según tu modalidad de titulación</li>
                  <li>Cartas de no adeudo</li>
                  <li>Pago de ARANCEL correspondiente</li>
                  <li>Esperar respuesta de la división para la acta de titulación.</li>
                </ul>
              </div>
              
              <div class="col-md-6 text-center">
                <img style="width: auto; height: 250px;" src="../../assets/images/graduado.png" alt="tu navegador no soporta imagenes">
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">Costos y tiempos</h4>
              <div class="col-md-6 text-center">
                <img style="width: auto; height: 150px;" src="../../assets/images/pergamino.png" alt="tu navegador no soporta imagenes">
              </div>

              <div class="col-md-6">
                <p>
                  El pergamino tiene el valor de $4967 <br>
                  El tiempo que toma para generar el pergamino unos 15 días aproximadamente.
                </p>
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">Opciones</h4>
              <div class="card col-md-6">
                <div class="card-body">
                  <h5 class="card-title text-center">Excelencia académica</h5>
                  <div class="card-body">
                    <ul>
                      <li>Promedio mínimo de 95</li>
                      <li>Aprobación del 90% de las asignaturas en periodo ordinario</li>
                    </ul>
                    Documentos necesarios: 
                    <ul>
                      <li>Formato A</li>
                      <li>Kardex</li>
                      <li>Certificado de inglés</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="card col-md-6">
                <div class="card-body">
                  <h5 class="card-title text-center">Examen general de certificación profesional</h5>
                  <div class="card-body">
                    <ul>
                      <li>Evaluación del CENEVAL.</li>
                      <li>Testimonio de "Desempeño Satisfactorio" o "Desempeño Sobresaliente"</li>
                    </ul>
                    Documentos necesarios:
                    <ul>
                      <li>Formato A</li>
                      <li>Kardex</li>
                      <li>Certificado de Inglés</li>
                      <li>Testimonio</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>

  </section>

  <footer-vue/>
</template>

<script>
import HeaderVue from '../Header.vue'
import FooterVue from '../Footer.vue'
export default {
  components: { HeaderVue, FooterVue }
}
</script>

<style>

</style>