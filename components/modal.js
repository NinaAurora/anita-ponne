import { ArrowLeft, ArrowRight, X } from "react-feather";
import Image from "next/image";

const modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className="hidden md:block">
        <div
          onClick={handleClick}
          className="dismiss bg-gradient-to-b from-black/70 to-transparent w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <span
            onClick={handleClick}
            className="z-20 dismiss text-4xl text-white absolute top-0 right-0 m-8 cursor-pointer"
          >
            X
          </span>
          <div
            className="flex overlay  items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onClick={handleClick}
          >
            <div onClick={handelRotationLeft} className="p-8 cursor-pointer">
              <div>
                <ArrowLeft size={50} color="white" />
              </div>
            </div>

            <div className="w-[700px] h-screen relative">
              <Image
                src={clickedImg}
                alt="bigger pic"
                layout="fill"
                objectFit="contain"
                onClick={() => handleClick(item, index)}
                className="shadow-md w-full h-full"
              />
            </div>

            <div onClick={handelRotationRight} className="p-8 cursor-pointer">
              <div>
                <ArrowRight size={50} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default modal;
