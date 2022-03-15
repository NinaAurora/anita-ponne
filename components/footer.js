import Image from 'next/image'

import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Eye } from 'react-feather';


export default function Footer() {
  return (
    <div className="bg-blue-600">

      <div className="container mx-auto px-8 md:px-0 py-8 text-white">


        <div className="flex justify-center items-center">
          Like what you <Eye color="red" size={48} className="m-2" />?
        </div>


        <div className="grid grid-cols-3 justify-items-center">
          <div>
            © Anita Ponne
          </div>


          <div className="flex gap-4">

          <Facebook color="red" size={48} />
          <Instagram color="red" size={48} />
          <Linkedin color="red" size={48} />

           
          </div>

          <div>
            Contact
          </div>
        </div>

        <div className="text-center">
          Website by Nina Aurora
        </div>
      </div>

    </div>

  )

}