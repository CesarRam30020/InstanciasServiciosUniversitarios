<template>
  <header-vue/>
  
  <section class="container-fluid p-5">

  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title text-center">Laboratorios</h1>
          <div class="card-text">
            <section class="row">
              <h4 class="text-center">Laboratorio de UCTA</h4>
              <p class="text-justify col-md-6">
                <b>Material Usado</b> <br>
                Equipo de computo y proyectores <br>
                <b>Servicios</b> <br>
                Prestamo de equipos de computo para uso personal y didactico. <br>
                <b>Descripción</b> <br>
                Laboratorios ubicados en los edificios UCTA1 y UCTA2 mejor conocidos como alpha y beta donde se encuentran una serie de salones equipados con equipos de computo para alumnos y profesores donde se desarrollan clases relacionadas con TICS ademas de tener aulas especificas para el uso individual de alumnos que lo necesiten.
              </p>

              <div class="col-md-6 text-center">
                <img style="width: auto; height: 250px;" src="../../assets/images/labinfo.jpg" alt="tu navegador no soporta imagenes">
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">Laboratorio de Móviles</h4>
              <div class="col-md-6 text-center">
                <img style="width: auto; height: 380px;" src="../../assets/images/labmovil.jpg" alt="tu navegador no soporta imagenes">
              </div>

              <div class="col-md-6">
                <b>Material Usados</b> <br>
                Software y computadoras para la creacion de aplicaciones. <br>
                <b>Servicios</b> <br>
                Ofrece ayuda para el desarrollo de las aplicaciones moviles.  <br>
                <b>Descripción</b> <br>
                El Laboratorio de @CuceiMobile se encuentra en el Modulo "M" en donde se desarrollan aplicaciones para los dispositivos moviles como lo son iPhone, iPad, iPod asi como con Android, Usando las herramientas de desarrollo como xCode, Objective C, Eclipse, Java e appInventor, contamos con estudiantes de gran capacidad para para poder desarrollar cualquier aplicación que se requiera en cualquier ambito, personal, educativo, empresarial, gubernamental etc.
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