import React, { useState } from "react";
import data from "../src/data/images.json";
import Modal from "../components/modal";
import Image from "next/image";

function Gallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handleRotationRight = () => {
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

  const handleRotationLeft = () => {
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
      <div className="py-12 text-center">
        <h1 className="text-3xl font-medium uppercase">Gallery</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 leading-[0rem]">
        {data.data.map((item, index) => (
          <div
            key={index}
            className="relative transition ease-in-out hover:scale-105 cursor-pointer"
          >
            <Image
              src={item.link}
              alt="me"
              width="500"
              height="700"
              onClick={() => handleClick(item, index)}
              objectFit="cover"
            />

            <div className="{item.status} bg-slate-800/20 absolute inset-x-0 bottom-0 text-center text-white text-xl font-medium py-4 drop-shadow flex justify-around">
              <p className="">{item.text}</p>
              <p className=""> {item.price}</p>
            </div>

          </div>
        ))}
        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handelRotationRight={handleRotationRight}
              setClickedImg={setClickedImg}
              handelRotationLeft={handleRotationLeft}
            />
          )}
        </div>
      </div>

      <div className="py-12">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          tenetur eaque, quam aliquam voluptatum debitis, pariatur magnam soluta
          nisi numquam molestiae dolorum ad corporis earum. Ipsa aliquam
          temporibus totam praesentium? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. At velit provident commodi beatae! Hic, impedit
          laudantium, ullam excepturi odio suscipit veniam quisquam tempore
          nesciunt quaerat in ratione? Id, odit nam?
        </p>
      </div>
    </div>
  );
}

export default Gallery;