import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Eye } from 'react-feather';

import brushes from '../public/brushes.jpg'
import hands from '../public/hands.jpg'
import palette from '../public/palette.jpg'

export default function HomePage() {
  return (

  <div className="container mx-auto px-8 md:px-0">

    <div className="relative h-screen">
      <Image
        src={hands}
        alt="Hands covered in paint"
        layout="fill"
        objectFit="cover"
        className="opacity-75"
        />
    
      <div className="drop-shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full">
        <h1 className="uppercase text-6xl font-medium">
          Geometrisch abstract
        </h1>
        <p className="text-xl font-medium">
          Met invloeden van Sesamstraat en jaren 60 kunst.
        </p>
      </div>

      <Eye color="red" size={100} className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-overlay" />
      <Eye color="red" size={100} className="absolute top-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/3 -rotate-45 mix-blend-overlay" />
      <Eye color="red" size={100} className="absolute top-1/4 left-2/3 transform -translate-x-1/2 translate-y-1/3 rotate-45 mix-blend-overlay" />

      <Eye color="red" size={100} className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-overlay" />
      <Eye color="red" size={100} className="absolute top-2/4 left-1/3 transform -translate-x-1/2 translate-y-3/4 rotate-45 mix-blend-overlay" />
      <Eye color="red" size={100} className="absolute top-2/3 left-2/3  transform -translate-x-1/2 -translate-y-1/3 -rotate-45 mix-blend-overlay" />
    </div>


      
  </div>

  )
}
 