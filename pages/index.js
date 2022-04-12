import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "react-feather";
import abstract from "../public/abstract.jpg";

export default function HomePage() {
  return (
    <div className="container mx-auto md:px-0 overflow-hidden">
      <div className="relative h-screen">
        <Image
          src={abstract}
          alt="Abstract art"
          layout="fill"
          objectFit="cover"
          className="opacity-75"
        />

        <Link href="/gallery">
          <a>
            <div className="drop-shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-8 transition ease-in-out duration-200 hover:skew-y-3 hover:scale-150">
              <h1 className="uppercase text-4xl md:text-6xl font-medium">
                Geometrisch abstract
              </h1>
              <div className="flex items-center justify-center">
                <p className="pt-4 md:pt-0 text-xl font-medium px-4 md:px-0">
                  Met invloeden van Sesamstraat en jaren 60 kunst
                </p>
                <ArrowRight color="white" size={32} className="pl-2" />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
