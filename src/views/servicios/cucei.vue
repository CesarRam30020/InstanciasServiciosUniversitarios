<template>
  <header-vue/>

  <section class="container-fluid p-5">

  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title text-center">CUCEI</h1>
          <div class="card-text">
            <section class="row">
              <p class="text-justify col-md-6">
                El CUCEI, o Centro Universitario de Ciencias Exactas e Ingenierías, es una unidad académica de la Universidad de Guadalajara (UdeG) ubicada en Guadalajara, Jalisco, México. Este centro universitario se enfoca en la enseñanza e investigación en áreas relacionadas con ciencias exactas e ingenierías. Ofrece programas académicos en disciplinas como matemáticas, física, química, ingeniería electrónica, ingeniería en computación, ingeniería en informática, entre otros. <br><br>
                El CUCEI es una parte importante de la Universidad de Guadalajara, que es una de las instituciones educativas más grandes y prestigiosas de México. La Universidad de Guadalajara se dedica a proporcionar educación de calidad en diversas áreas del conocimiento y contribuir al desarrollo académico, cultural y científico de la región y del país.
              </p>

              <div class="col-md-6 text-center">
                <img style="width: auto; height: 375px;" src="../../assets/images/CUCEI.png" alt="tu navegador no soporta imagenes">
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">Ubicación de rectoria</h4>
              <div class="col-md-6 text-center">
                <img style="width: auto; height: 250px;" src="../../assets/images/rectoria.jpg" alt="tu navegador no soporta imagenes">
              </div>

              <p class="text-justify col-md-6">
                Rectoria se encuentra en el modulo A (edificio de Rectoria), en la planta superior, hasta el fondo.
              </p>
            </section>

            <section class="row">
              <h4 class="text-center">Gobierno de CUCEI</h4>
              <div class="text-center col-md-12">
                <img style="width: 100%; height: auto;" src="../../assets/images/gobiernocucei.png" alt="tu navegador no soporta imagenes">
              </div>
            </section>

            <section class="row">
              <h4 class="text-center">Consejo de Centro</h4>
              <div class="col-md-12">
                El Consejo es la máxima autoridad del Centro Universitario, lo preside el Rector y el Secretario Académico, este último funge como secretario de actas y acuerdos del Consejo. El artículo 51 de la Ley Orgánica establece la composición del Consejo como sigue:
                <ol>
                  <li>El Rector de Centro Universitario.</li>
                  <li>El Secretario Académico.</li>
                  <li>El Secretario Administrativo.</li>
                  <li>Los Directores de División.</li>
                  <li>Un representante académico, directivo y estudiantil por cada Departamento, siempre que no excedan de cinco Departamentos por División.</li>
                  <li>El Presidente del Consejo Social del Centro Universitario, y</li>
                  <li>Un representante general de las siguientes organizaciones:</li>
                </ol>
                <ul>
                  <li>Del personal académico,</li>
                  <li>Del personal administrativo,</li>
                  <li>Del alumnado,</li>
                </ul>
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