import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {motion } from 'framer-motion'; 
import {fadeIn} from '../variants';
import {Link} from 'react-scroll';

const About = () => {
    const [ref, inView] = useInView({
      threshold: 0.5,
    });
  return ( 
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row-reverse lg:items-center'> 
        {/*img */}
        <motion.div  variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3 }} className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
        </motion.div>
        {/*text*/}
        <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3 }} className='flex-1'>
          <h2 className='h2 text-accent'> Sobre mi</h2>
          <h3 className='h3 mb-4'> Soy Desarrollador Front end </h3>
          <p className='mb-6'>
          Soy una persona altamente creativa y proactiva, siempre dispuesta a aprender y abordar nuevos desafíos.
          Mi enfoque se centra en encontrar soluciones prácticas y eficientes para resolver los problemas que se presentan. Disfruto trabajando en equipo, ya que creo firmemente en el valor de la colaboración y el intercambio de ideas. Constantemente busco nuevas formas de contribuir y proponer ideas innovadoras que impulsen un mejoramiento continuo en todas las áreas en las que trabajo.
          </p>
          {/*stats*/}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-primary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={5} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm trackling-[2px]'>
                Meses de <br/> Experiencia
              </div>
            </div>
            <div>
              <div className='text-[40px] font-primary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={10} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm trackling-[2px]'>
                proyectos <br/> completados
              </div>
            </div>
            <div>
              <div className='text-[40px] font-primary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={5} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm trackling-[2px]'>
                Clientes <br/> satisfectos
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
          <button className='btn btn-lg'><Link to='contact' activeClass='active' smooth={true} spy={true}>Contactame</Link></button>
            <a href='https://drive.google.com/file/d/1khQ6q3hf1vyFNixM4rYbbULpSh7uhCOZ/view?usp=sharing' className='text-gradient btn-link'>
            Visualizar CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>

  </section>
)};

export default About;