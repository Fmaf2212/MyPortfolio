import React, { useRef, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import AnimatedText from '../components/AnimatedText'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import Skills from '../components/Skills'
import Experiencie from '../components/Experiencie'
import Education from '../components/Education'
import TransitionEffect from '../components/TransitionEffect'

const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref);

    useEffect(() => {
      if(isInView){
        motionValue.set(value);
      }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
      }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>CodeBucks | About Page</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <Layout className='pt-16'>
                <AnimatedText text="La pasión es el camino hacia el propósito." className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">Biografía</h2>
                        <p className='font-medium'>Hola, soy Fernando Moises, un desarrollador web apasionado por crear experiencias digitales hermosas, funcionales y centradas en el usuario. Con 4 años de experiencia en el ambito. Siempre estoy buscando formas nuevas e innovadoras de hacer realidad las visiones de mis clientes.</p>
                        <p className='my-4 font-medium'>Creo que el diseño es algo más que hacer que las cosas luzcan bonitas: se trata de resolver problemas y crear experiencias intuitivas y agradables para el usuario final.</p>
                        <p className='font-medium'>Aporto mi compromiso con la excelencia en el diseño y el pensamiento centrado en el usuario a cada proyecto en el que trabajo. Espero tener la oportunidad de aportar mis habilidades y pasión a su próximo proyecto.</p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-9'>
                        <div className='absolute top-0 -right-3 -z-10 w-[101.5%] h-[102.5%] rounded-[2rem] bg-dark dark:bg-light'></div>
                        <Image src={profilePic} alt="Codebucks" className="w-full h-auto rounded-2xl" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={50} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>clientes satisfechos</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={40} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>proyectos completados</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={4} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>años de experiencia</h2>
                        </div>
                    </div>
                </div>
                <Skills />
                <Experiencie />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about