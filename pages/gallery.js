import React, { useState } from "react";
import data from "../src/data/images.json";
import Modal from "../components/modal";

function Gallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {data.data.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.link}
              alt={item.text}
              onClick={() => handleClick(item, index)}
              className="object-cover w-[520px] h-[400px] cursor-pointer"
            />
            <h2 className="absolute inset-x-0 bottom-0 text-center text-white text-xl font-medium py-4 drop-shadow">{item.text}</h2>
          </div>
        ))}
        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handelRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handelRotationLeft}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery;

// import Image from "next/image";
// import React from "react";

// import eyeLogo from "../public/eye.svg";

// export default function Gallery() {
//   return (
//     <div className="container mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-3">
//         <div className="bg-violet-600">
//           <Image src={eyeLogo} alt="Eye logo" width={500} height={500} />
//         </div>

//         <div className="bg-pink-500 relative">
//           <Image src={eyeLogo} alt="Eye logo" width={500} height={500} />
//           <p className="uppercase absolute inset-x-0 bottom-0 text-center pb-4 text-xl font-medium">
//             Painting Title
//           </p>
//         </div>

//         <div className="bg-lime-400">
//           <Image src={eyeLogo} alt="Eye logo" width={500} height={500} />
//         </div>
//         <div className="bg-yellow-300">
//           <Image src={eyeLogo} alt="Eye logo" width={500} height={500} />
//         </div>

//         <div className="bg-sky-500">
//           <Image src={eyeLogo} alt="Eye logo" width={500} height={500} />
//         </div>

//         <div className="bg-red-600">
//           <Image src={eyeLogo} alt="Eye logo" width={500} height={500} />
//         </div>
//       </div>
//     </div>
//   );
// }
