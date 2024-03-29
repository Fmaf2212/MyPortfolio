import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import Lilcon from './Lilcon'


const Details = ({position, company, companyLink, time, address, work, y}) =>{

    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <Lilcon reference={ref} />
            <motion.div initial={{y: 50}} whileInView={{y:y}} transition={{duration: 2, type:"spring"}}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-primary capitalize dark:text-primaryDark'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm '>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
                {/* <ol>
                    work.forEach((e) => {
                        console.log("hola")
                    });
                </ol> */}
            </motion.div>
        </li>
    )
}

const Experiencie = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center"]
        }
    );
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 '>
            Experiencia
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div  viewport={{once: true}} style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details y="0" position="Frontend Developer" company="Santa Natura" companyLink="tienda.mundosantanatura.com" time="ago. 2019 - actualidad" address="San Isidro, Lima, Perú · Presencial" work={["• Diseñé e implementé interfaces de usuario visualmente atractivas utilizando HTML, CSS y JavaScript.","• Colaboré ​​con los desarrolladores de back-end para integrar la funcionalidad de front-end con los sistemas de base de datos.","• Rendimiento optimizado del sitio web al identificar y resolver problemas de codificación e implementar elementos de diseño eficientes.","• Realizó pruebas y depuraciones exhaustivas para garantizar una experiencia de usuario perfecta en múltiples plataformas y dispositivos.","• Utilicé tecnologías innovadoras para mejorar el rendimiento y la velocidad del sitio web.","• Colaboré ​​con diseñadores y desarrolladores de back-end para integrar características de front-end con funcionalidades de back-end."]} />
                <Details y="0" position="Software Engineer" company="Google" companyLink="www.google.com" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." />
            </ul>
        </div>
    </div>
  )
}

export default Experiencie