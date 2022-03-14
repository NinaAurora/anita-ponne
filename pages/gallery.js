import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import eyeLogo from '../public/eye.svg'

export default function Gallery() {
    return (

       <div className="container mx-auto">

           <div className="grid grid-cols-3">

                <div className="bg-violet-600">
                    <Image
                    src={eyeLogo}
                    alt="Eye logo"
                    width={500}
                    height={500}
                />
                </div>

                <div className="bg-pink-500">
                    <Image
                    src={eyeLogo}
                    alt="Eye logo"
                    width={500}
                    height={500}
                />
                </div>

                <div className="bg-lime-400">
                    <Image
                    src={eyeLogo}
                    alt="Eye logo"
                    width={500}
                    height={500}
                />
                </div>
                <div className="bg-yellow-300">
                    <Image
                    src={eyeLogo}
                    alt="Eye logo"
                    width={500}
                    height={500}
                />
                </div>

                <div className="bg-sky-500">
                    <Image
                    src={eyeLogo}
                    alt="Eye logo"
                    width={500}
                    height={500}
                />
                </div>

                <div className="bg-red-600">
                    <Image
                    src={eyeLogo}
                    alt="Eye logo"
                    width={500}
                    height={500}
                />
                </div>

            </div>
        
       </div>

    )
  }
  