
import './App.css';
import Testimonios from './Testimonios';

function App() {
  return (
    <div className='App'>
      <h1>Aqui estan algunos testimonios de nuestros estudiantes</h1>
      <Testimonios 
      nombre='Emma Bostian'
      imagen='emma'
      pais = 'Suecia'
      cargo = 'Ingeniera de Software'
      empresa='Spotify'
      feedback='"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."'
      />
      <Testimonios 
      nombre='Sarah Chima'
      imagen='sarah'
      pais = 'Nigeria'
      cargo = 'Ingeniera de Software'
      empresa='ChatDesk'
      feedback='"freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."'
      />
      <Testimonios 
      nombre='Shawn Wang'
      imagen='shawn'
      pais = 'Singapur'
      cargo = 'Ingeniera de Software'
      empresa='Amazon'
      feedback='"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
      />
       

     </div>
  );
}

export default App;
