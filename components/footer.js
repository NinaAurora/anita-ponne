import Link from 'next/link'

import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Eye } from 'react-feather';


export default function Footer() {
  return (
    <div className="bg-slate-900">
      <div className="container mx-auto px-8 md:px-0 py-8 text-white">
        <div className="grid grid-cols-1 justify-items-center">
          <p className="flex items-center uppercase text-3xl font-bold pb-4">
            Like what you <Eye color="white" size={48} className="m-2" />?
          </p>

          <Link href="/contact">
            <a>
              <button className="bg-white font-medium text-slate-900 rounded-lg py-6 px-14 uppercase transition ease-in hover:bg-slate-300 active:bg-slate-500">
                Contact me!
              </button>
            </a>
          </Link>
        </div>  

        <div className="grid grid-cols-1 justify-items-center items-center uppercase">
          <div className='flex justify-center gap-12 py-10'>
            <a href='https://www.facebook.com/'
                target={"_blank"}>
            <Facebook color="white" size={40} />
            </a>

            <a href='https://www.instagram.com/'
                target={"_blank"}>
            <Instagram color="white" size={40} />
            </a>

            <a href='https://www.linkedin.com/'
                target={"_blank"}>
            <Linkedin color="white" size={40} />
            </a>
          </div>
        </div>

        <div className="flex justify-center divide-x gap-x-4">
          <p> © 2022 All rights reserved</p>
          <p className="pl-4"> Website by Nina Aurora</p>
        </div>
      </div>
    </div>
  )
}