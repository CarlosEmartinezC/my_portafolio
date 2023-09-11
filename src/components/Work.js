import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';
const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx audio'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-light text-accent'> My latest <br/> Work.</h2>
            <p className='max-w-sm mb-16'>¡Bienvenido a mi portafolio, donde mi pasión por la excelencia se encuentra con mi experiencia probada! Aquí, 
            te invito a explorar una colección diversa de proyectos que ilustran mi habilidad para llevar ideas a la vida a través del diseño creativo, 
            la innovación tecnológica y la atención al detalle. Cada trabajo representa un logro en mi carrera, 
            desde proyectos gráficos que cautivan hasta soluciones digitales que marcan la diferencia. Estoy listo para llevar mis talentos y compromiso a tu equipo. 
            ¿Estás listo para unirte a mí en la creación de un futuro visualmente impactante?</p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img*/}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
            {/* pretitle */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design </span>
            </div>
            {/* title */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-while'>Project Title</span>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-10 '>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img*/}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
            {/* pretitle */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design </span>
            </div>
            {/* title */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-while'>Project Title</span>
            </div>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img*/}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
            {/* pretitle */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design </span>
            </div>
            {/* title */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-while'>Project Title</span>
            </div>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img*/}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
            {/* pretitle */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design </span>
            </div>
            {/* title */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-while'>Project Title</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)};

export default Work;