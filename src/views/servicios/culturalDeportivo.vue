<template>
  <header-vue />

  <section class="container-fluid p-5">

  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title text-center">Modulo de actividades culturales y deportivas</h1>
          <div class="card-text">
            <section class="row">
              <h4 class="text-center">Ubicación</h4>
              <p class="text-justify col-md-12">
                El modulo se encuentra en el edificio A. <br><br>
                Más específicamente, en el primer patio, en el segundo piso del lado derecho al final del pasillo.
              </p>

              <div class="col-md-12 text-center">
                <img style="width: 100%; height: auto;" src="../../assets/images/mapacucei.jpg" alt="tu navegador no soporta imagenes">
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">¿Qué servicios ofrece?</h4>
              <div class="col-md-6">
                <b>Actividades Culturales</b>
                <ul>
                  <li>Baile: afroantillano, banda, danza árabe, danzas polinesias, jazz, regional y rock de los 60’s.</li>
                  <li>Teatro</li>
                  <li>Yoga</li>
                  <li>Canto</li>
                  <li>Guitarra clásica</li>
                  <li>Tuna de CUCEI femenil y varonil</li>
                  <li>Violín</li>
                  <li>Ajedrez</li>
                  <li>Capoeira</li>
                  <li>Dibujo y pintura</li>
                  <li>Juegos de mesa alternativos. Talleres sobre comunicación y liderazgo, lectura veloz, oratoria y declamación.</li>
                </ul>
              </div>

              <div class="col-md-6">
                <b>Actividades Deportivas</b>
                <ul>
                  <li>Futbol Femenil y Varonil</li>
                  <li>Futbol bardas</li>
                  <li>Voleibol</li>
                  <li>Básquetbol</li>
                  <li>Atletismo</li>
                  <li>Béisbol</li>
                  <li>Gimnasia aeróbica</li>
                  <li>Halterofilia</li>
                  <li>Judo</li>
                  <li>Karate</li>
                  <li>Handball</li>
                  <li>Tae kwon do</li>
                  <li>Tenis</li>
                </ul>
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">Costo al estudiante</h4>
              <div class="text-justify col-md-6">
                <h5 class="text-center"><b>$350</b></h5>
                <p> Algunas de estas actividades son gratuitas como son el club de lectura, la tuna (estudiantina) y club de mariachi.</p>
              </div>

              <div class="col-md-6 text-center">
                <img style="width: auto; height: 150px;" src="../../assets/images/dinero.jpg" alt="tu navegador no soporta imagenes">
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">¿Cómo y cuándo acceder a ellos?</h4>
              <div class="col-md-6 text-center">
                <img style="width: auto; height: 150px;" src="../../assets/images/fecha_ingreso.jpg" alt="tu navegador no soporta imagenes">
              </div>

              <div class="col-md-6">
                <p>
                  Las convocatorias de los clubes son las primeras dos semanas de cada semestre y como requisito para ingresar solo se necesita ser estudiante. De lo contrario, se puede acceder pagando un precio más alto que el ya mencionado.
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

</style>