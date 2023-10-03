import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Img1 from '../assets/Profes.png';
import Img2 from '../assets/Wheel.png';
import Img3 from '../assets/Zshop.png';
import Img4 from '../assets/dashboard.PNG';
const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-light text-accent'> Mis proyectos y <br/> Trabajos.</h2>
            <p className='max-w-sm mb-5'> A lo largo de mi carrera, he trabajado en diversos proyectos utilizando React, HTML5, CSS3 y JavaScript para crear experiencias web innovadoras y funcionales. Estos proyectos demuestran mi experiencia en el desarrollo web y mi enfoque en la creación de soluciones efectivas y atractivas.</p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img*/}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='Esta es una pagina web donde se podra encontrar material de clase para los profesores de colombia.' />
            {/* pretitle */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-24 bg-black/70 duration-500 z-50 rounded-xl'>
              <a href="https://github.com/CarlosEmartinezC/ideas-project-final" className='text-gradient'>Repositorio</a>
            </div>
            <div className='absolute -buttom-full right-12 group-hover:bottom-24 bg-black/70 duration-500 z-50 rounded-xl'>
              <a href="https://ideas-project-final.vercel.app/carouselcomponent" className='text-gradient'>VER DEMO</a>
            </div>
            {/* title */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-while'>Plataforma de consulta profesores</span>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3 }} className='flex-1 flex flex-col gap-y-11 '>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img*/}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='Juego basado en colombia.' />
            {/* pretitle */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-24 bg-black/70 duration-500 z-50 rounded-xl'>
              <a href="https://github.com/Juanpak12/Hide_in_the-world-B13" className='text-gradient'>Repositorio</a>
            </div>
            <div className='absolute -buttom-full right-12 group-hover:bottom-24 bg-black/70 duration-500 z-50 rounded-xl'>
              <a href="https://deploy-preview-16--wheel-of-doom-colombia.netlify.app/" className='text-gradient'>VER DEMO</a>
            </div>
            {/* title */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-while'>Wheel of dom</span>
            </div>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img*/}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='Diseño atractivo y llamativo de landing page con css, y html, con cuatro pestañas de navegabilidad.' />
            {/* pretitle */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-24 bg-black/70 duration-500 z-50 rounded-xl'>
              <a href="https://github.com/CarlosEmartinezC/Restzshop" className='text-gradient'>Repositorio</a>
            </div>
            <div className='absolute -buttom-full right-12 group-hover:bottom-24 bg-black/70 duration-500 z-50 rounded-xl'>
              <a href="https://carlosemartinezc.github.io/Restzshop/" className='text-gradient'>VER DEMO</a>
            </div>
            {/* title */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-while'>Restzshop</span>
            </div>
          </div>
          {/*image*/}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img*/}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img4} alt='App de consumo de API.' />
            {/* pretitle */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-24 bg-black/70 duration-500 z-50 rounded-xl'>
              <a href="https://github.com/CarlosEmartinezC/My-frist-dashboard-react" className='text-gradient'>Repositorio</a>
            </div>
            <div className='absolute -buttom-full right-12 group-hover:bottom-24 bg-black/70 duration-500 z-50 rounded-xl'>
              <a href="https://my-frist-dashboard-react.vercel.app/" className='text-gradient'>VER DEMO</a>
            </div>
            {/* title */}
            <div className='absolute -buttom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3x1 text-while'>Crypto Stadistics</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)};

export default Work;