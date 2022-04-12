import Image from "next/image";

import paintingsTwo from "../public/paintings2.jpeg";

export default function Contact() {
  return (
    <div className="container bg-white mx-auto">
      <div className="grid lg:grid-cols-2 md:gap-12">
        <div className="w-full h-80 lg:h-full relative">
          <Image
            src={paintingsTwo}
            alt="Handful of abstract paintings leaning against a wall"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="px-8 md:pr-16 py-10">
          <h1 className="text-3xl font-semibold uppercase pb-6">Contact me</h1>
          <form>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded px-4 py-3 bg-gray-100 border-2 outline-none focus:border-slate-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded px-4 py-3 bg-gray-100 border-2 outline-none focus:border-slate-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full rounded px-4 py-3 bg-gray-100 border-2 outline-none focus:border-slate-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full rounded px-4 py-3 bg-gray-100 border-2 outline-none focus:border-slate-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 text-white bg-slate-800 rounded border border-primary  transition hover:bg-opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>


      <div className="w-1/2 py-10 mx-auto">
            <h1 className="text-3xl font-semibold uppercase py-4">Contact me</h1>
            <p className="py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In delectus magni quibusdam est odio doloremque sequi placeat mollitia vel eum pariatur consequuntur reiciendis, tempora optio laborum, vitae voluptatibus quae incidunt!</p>
            <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae eos fugiat! Fuga excepturi fugiat asperiores non nihil eligendi, quaerat aut, dolorem doloribus corporis blanditiis dolore sint libero mollitia nulla?</p>
          </div>

    </div>
  );
}
