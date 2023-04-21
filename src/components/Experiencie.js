import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import Lilcon from './Lilcon'


const Details = ({position, company, companyLink, time, address, work, y}) =>{

    const ref = useRef(null);

    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between '>
            <Lilcon reference={ref} />
            <motion.div initial={{y: 50}} whileInView={{y:y}} transition={{duration: 2, type:"spring"}}>
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-primary capitalize dark:text-primaryDark'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
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
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Experiencia
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div  viewport={{once: true}} style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' />
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details y="0" position="Software Engineer" company="Google" companyLink="www.google.com" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." />
                <Details y="0" position="Software Engineer" company="Google" companyLink="www.google.com" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." />
                <Details y="0" position="Software Engineer" company="Google" companyLink="www.google.com" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." />
                <Details y="0" position="Software Engineer" company="Google" companyLink="www.google.com" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." />
                <Details y="0" position="Software Engineer" company="Google" companyLink="www.google.com" time="2022-Present" address="Mountain View, CA" work="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization." />
            </ul>
        </div>
    </div>
  )
}

export default Experiencie