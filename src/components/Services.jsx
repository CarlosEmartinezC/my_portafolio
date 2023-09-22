import React from 'react';
import {  motion  } from 'framer-motion';
import  { fadeIn  } from '../variants';
import {Link} from 'react-scroll';

//services data
const services =[
  {
    name: 'Lectura y Educación Financiera',
    description: 'Soy un lector apasionado de libros de autoayuda y educación financiera. A través de la lectura, busco continuamente crecimiento personal y desarrollo financiero, lo que me permite aplicar valiosos conocimientos en mi vida cotidiana.',
    link: 'leer más'
  },
  {
    name: 'Música y Piano',
    description: 'La música y tocar el piano son mi escape creativo. Estas actividades me enseñan disciplina y perseverancia, y encuentro en ellas una fuente constante de inspiración y relajación.',
    link: 'leer más'
  },
  {
    name: "Ciclismo y Viajes",
    description: "El ciclismo y los viajes son mi forma de conectar con la naturaleza y explorar nuevos lugares. Estas experiencias me han brindado resistencia, planificación y adaptabilidad, cualidades que aplico tanto en mi vida personal como en mi carrera.",
    link: "leer más"
  }
];
const Services = () => {

  return (
  <div className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3 }} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'> hobbies </h2>
          <h3 className='h3 max-w-[455px] mb-16'>
          Mi vida va más allá de mi carrera profesional, y mis intereses y pasatiempos desempeñan un papel fundamental en mi desarrollo personal. Aquí te presento tres de mis pasiones:
          </h3>
          <button className='btn btn-lg'><Link to='work' activeClass='active' smooth={true} spy={true}>Mira mis trabajos</Link></button>
        </motion.div>
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3 }} className='flex-1'>
          <div>
            {services.map((service, index) => {
              const{name, description, link} = service;
               return (
              <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                <div className='max-w-[500px]'>
                <h4 className='text-[20px] tracking.wider font-primary font-semibold mb-2'>{name}</h4>
                <p className='font-secondary leading-tight mb-3'>{description}</p>  
                </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </div>
)};

export default Services;