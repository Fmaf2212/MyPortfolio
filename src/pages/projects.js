import React from 'react'
import TransitionEffect from '../components/TransitionEffect'
import Head from 'next/head'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import { GithubIcon } from '../components/Icons'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const FramerImage = motion(Image);

const FeatureProject = ({type, title, summary, img, link, github}) =>{
  return (
    <article className='w-full flex items-center justify-between rounded-br-2xl relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light' />
      <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale: 1.05}} transition={{duration: 0.2}} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10 dark:text-light'><GithubIcon/></Link>
          <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold hover:bg-gray-700  transition-colors'>Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({title, type, img, link, github}) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
      <Link href={link} target="_blank" className='cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale: 1.05}} transition={{duration: 0.2}} />
      </Link>
      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target="_blank" className='text-lg font-semibold underline dark:text-light'>Visit
          </Link>
          <Link href={github} target="_blank" className='w-8 dark:text-light'><GithubIcon/></Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <>
    <Head>
      <title>CodeBucks | Projects Page</title>
      <meta name='description' content='any description'></meta>
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:bg-light'>
      <Layout className='pt-16'>
        <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 '/>
        <div className='grid grid-cols-12 gap-24 gap-y-32'>
          <div className='col-span-12'>
            <FeatureProject
              title="Crypto Screener Application"
              img={project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
              local currency."
              link="/"
              github="/"
              type="Feature Project "
            />
          </div>
          <div className='col-span-6'>
            <Project
              title="Crypto Screener Application"
              img={project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
              local currency."
              link="/"
              github="/"
              type="Feature Project "
            />
          </div>
          <div className='col-span-6'>
            <Project
              title="Crypto Screener Application"
              img={project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
              local currency."
              link="/"
              github="/"
              type="Feature Project "
            />
          </div>

          <div className='col-span-12'>
            <FeatureProject
              title="Crypto Screener Application"
              img={project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
              local currency."
              link="/"
              github="/"
              type="Feature Project "
            />
          </div>
          <div className='col-span-6'>
          <Project
              title="Crypto Screener Application"
              img={project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
              local currency."
              link="/"
              github="/"
              type="Feature Project "
            />
          </div>
          <div className='col-span-6'>
            <Project
              title="Crypto Screener Application"
              img={project1}
              summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
              local currency."
              link="/"
              github="/"
              type="Feature Project "
            />
          </div>
        </div>
      </Layout>
    </main>
  </>
  )
}

export default Projects