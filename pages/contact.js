import Image from "next/image";

import abstract from "../public/abstract.jpg";

export default function Contact() {
  return (
    <div className="container bg-white mx-auto">
      <div className="relative h-80">
        <Image
          src={abstract}
          alt="Abstract art"
          layout="fill"
          objectFit="cover"
        />

        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-semibold uppercase text-white">
          Contact me
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 md:gap-12">
        <div className="md:w-1/2 p-8 md:py-10 mx-auto">
          <h1 className="text-3xl font-semibold uppercase py-4">
            Send an e-mail
          </h1>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
            delectus magni quibusdam est odio doloremque sequi placeat mollitia
            vel eum pariatur consequuntur reiciendis, tempora optio laborum,
            vitae voluptatibus quae incidunt!
          </p>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae
            eos fugiat! Fuga excepturi fugiat asperiores non nihil eligendi,
            quaerat aut, dolorem doloribus corporis blanditiis dolore sint
            libero mollitia nulla?
          </p>
        </div>

        <div className="px-8 md:pr-16 py-16">
          <form
            name="contact"
            action="/success"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="mb-6">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Your Name"
                className="w-full rounded px-4 py-3 bg-gray-100 border-2 outline-none focus:border-slate-500"
              />
            </p>
            <p className="mb-6">
              <input
                type="email"
                name="email"
                id="youremail"
                placeholder="Your Email"
                className="w-full rounded px-4 py-3 bg-gray-100 border-2 outline-none focus:border-slate-500"
              />
            </p>
            <p className="mb-6">
              <textarea
                name="message"
                id="yourmessage"
                rows="6"
                placeholder="Your Message"
                className="w-full rounded px-4 py-3 bg-gray-100 border-2 outline-none focus:border-slate-500"
              ></textarea>
            </p>
            <p >
              <button
                type="submit"
                className="w-full py-3 text-white bg-slate-800 rounded-lg border border-primary  transition hover:bg-opacity-90"
              >
                Send
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
