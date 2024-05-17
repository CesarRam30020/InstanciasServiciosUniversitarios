<template>
  <header-vue />

  <section class="container-fluid p-5">

    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title text-center">Biblioteca</h1>
            <div class="card-text">
              <section class="row">
                <h4 class="text-center">Ubicación</h4>
                <p class="text-justify col-md-6">
                  La biblioteca de CUCEI, fue fundada el 28 de marzo del 2001, este año cumple 23 años de impartir sus servicios. Y la van a poder encontrar en el Modulo A, también llamado centro integrado de documentación.
                </p>

                <div class="col-md-6 text-center">
                  <img style="width: auto; height: 150px;" src="../../assets/images/biblioteca.jpeg" alt="tu navegador no soporta imagenes">
                </div>
              </section>

              <section class="row">
                <h4 class="text-center">Servicios que ofrece la biblioteca</h4>
                <div class="col-md-6 text-center">
                  <img style="width: auto; height: 280px;" src="../../assets/images/libros.jpg" alt="tu navegador no soporta imagenes">
                </div>

                <div class="col-md-6">
                  <ul>
                    <li>Libros a préstamo externo o consulta interna</li>
                    
                    <li>Idiomas</li>
                    
                    <li>Se hace préstamo de computadoras, tabletas, y otros materiales de estudio.</li>

                    <li>Planta alta ofrecen idiomas (Inglés, Frances, Italiano, Ruso, Alemán, Mandarín, Español y Japones, esos servicios son gratuitos para todos los estudiantes de CUCEI).</li>

                    <li>Presta de cubículos de 4 a 6 personas máximo.</li>

                    <li>La biblioteca cuenta con préstamos físicos y digitales.</li>

                    <li>Rossetta Stone (Es una plataforma de aprendizaje autónomo)</li>
                  </ul>
                </div>
              </section>

              <section class="row">
                <h4 class="text-center">Como acceder a estos servicios</h4>
                <div class="text-justify col-md-12">
                  <p class="text-justify">
                    Se ingresa a través con la credencial escolar, en caso de ser de primer ingreso, traer cedula y horario del SIAU. Si requieres servicios de auto acceso trabajaras de manera autodidacta.
                  </p>
                  <p class="text-justify">
                    Para acceder a estos servicios, es ingresar al <a href="https://caa.cucei.udg.mx/" target="_blank">portal</a> y descargas una carta de compromiso de trabajo contigo mismo, y también necesitaras una foto tamaño infantil y una carpeta, donde se realizará un expediente. Se les dará una licencia que se llama Rossetta Stone (Es una plataforma de aprendizaje autónomo), trabajaras a tu propio ritmo, con un límite de estudio de 3 horas semanales. También cuenta con club de conversación (Es un espacio donde las personas se reúnen a dialogar y a practicar lo que se ha aprendido con hablantes locales o nativos, y también hay Asesorías por lengua moderna.
                  </p>
                </div>
              </section>

              <section class="row">
                <h4 class="text-center">Sanciones</h4>
                <div class="col-md-6 text-center">
                  <img style="width: auto; height: 150px;" src="../../assets/images/Sanciones.png" alt="tu navegador no soporta imagenes">
                </div>

                <div class="col-md-6">
                  <ol>
                    <li>El llevarse un libro ejemplar 1 a casa y no entregarlo en el tiempo acordado, se le cobrara al alumno 1 peso por cada hora atrasada.</li>

                    <li>El llevarse un libro ejemplar 2 o de los otros a casa y no entregarlo en el tiempo acordado, se le cobrara al alumno 5 peso por cada hora atrasada.</li>
                  </ol>
                </div>
              </section>

              <section class="row">
                <h4 class="text-center">Tiempos de préstamo/limitación</h4>
                <p class="text-justify col-md-6">
                  Si es un libro ejemplar tipo 1, te lo prestan de lunes a jueves por 3 horas. <br>
                  Si es un libro ejemplar tipo 2, te lo prestaran por 15 días. <br>
                  Si es un libro de literatura te lo prestaran por 21 días. <br>
                  Si es un libro complementario se puede llevar a casa. <br>
                  Para obtener otro libro necesitaras entregar el anterior. <br>
                </p>

                <div class="col-md-6 text-center">
                  <img style="width: auto; height: 180px;" src="../../assets/images/biblioteca2.webp" alt="tu navegador no soporta imagenes">
                </div>
              </section>

              <section class="row">
                <h4 class="text-center">Accesibilidad física y online</h4>
                <div class="col-md-12">
                  <p>
                    La biblioteca cuenta con prestamos físicos y digitales, para ingresar al portal digital, debes ingresar a la <a href="https://wdg.biblio.udg.mx/" target="_blank">pagina oficial</a> o desde la pagina de CUCEI, en el apartado donde dice biblioteca. Te saldrán 2 opciones las cuales una es para consultar los libros disponibles en físico, y el otro para encontrarlos digitalmente.
                  </p>
                  <p>
                    Para ingresar a esa pagina debes ingresar tu código de estudiante. Una vez ingresado tendrás a tu disposición acceso a revistas científicas especializadas, tesis, 4 millones de libros, también puedes entrar a artículos académicos (Son todos gratuitos).
                  </p>
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