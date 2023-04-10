import Layout from '../components/Layout'
import { Inter } from 'next/font/google'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '../components/AnimatedText'
import { LinkArrow } from '../components/Icons'
import Link from 'next/link'
import HireMe from '../components/HireMe'
import lighBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '../components/TransitionEffect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create My Portfolio</title>
        <meta name='description' content='Generated by create next app'></meta>
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="CodeBucks" className="w-full h-auto"></Image>
            </div>
            <div>
              {/* <h1>Convertir la visión en realidad con código y diseño</h1> */}
              <AnimatedText text="Convertir la visión en realidad con código y diseño" className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>
              Como desarrollador front-end, me dedico a convertir ideas en aplicaciones web innovadoras.
              Exploré mis últimos proyectos y artículos, mostrando mi experiencia en React.js y desarrollo web.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link href="/dummy.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-colors" download={true}>Resume <LinkArrow /> </Link>
                <Link href="mailto:abcd@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline">Contacto</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lighBulb} alt="Codebucks" className="w-full h-auto"/>
        </div>
      </main>
    </>
  )
}