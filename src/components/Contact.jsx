import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_hy8x59n',
        'template_hod7zw6',
        formRef.current,
        'VlRCNpCUanPdCGqpT'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
      };
  return (
    <section id="contact" className='section'>
        
    <div className='container mx-auto'>
     <div className='flex flex-col lg:flex-row'> 
     <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3 }} className='flex-1 '>
          <div>
            <h4 className='text-[34px] uppercase text-accent font-medium mb-2 tracking-wide'>¡Gracias por visitar mi <br/>portafolio!</h4>
            <h2 className='text-[45px] lg:text-[34px] leading-none mb-12'><br/>Estoy emocionado por la posibilidad de trabajar juntos o responder a tus preguntas. Por favor, completa el siguiente formulario y estaré encantado de ponerme en contacto contigo lo más pronto posible.
            </h2>
            <img src="https://i.gifer.com/8JRk.gif"/>
          </div>
        </motion.div>
      <motion.form variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.3 }} 
      className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
       ref={formRef} onSubmit={handleSubmit}>
        <input 
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
          type="text"
          placeholder="Nombre Completo"
          name="user_name"
          required
        />
        <input
          type="text"
          placeholder="Correo electrónico"
          name="user_email"
          required
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
        />
        <textarea
          placeholder="Mensaje"
          rows="7"
          name="message"
          required
          className='bg-transparent border-b py-10 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none'
        ></textarea>
        <button type="submit" className="btn btn-lg" >
          Enviar mensaje
        </button>
        {message && <span>¡Gracias por contactarme! Tu mensaje es importante para mí y haré todo lo posible para responder de manera oportuna y efectiva.</span>}
      </motion.form>
      </div>
    </div>
  </section>
)};

export default Contact;