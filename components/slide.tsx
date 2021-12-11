import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import slide1 from "../img/slide1.jpg";
import slide3 from "../img/slide3.jpg";
import slide4 from "../img/slide4.jpg";
import slide5 from "../img/slide5.jpg";

const img = [
  <Image key={1} src={slide1} alt="Slider Image" />,
  <Image key={3} src={slide3} alt="Slider Image" />,
  <Image key={4} src={slide4} alt="Slider Image" />,
  <Image key={5} src={slide5} alt="Slider Image" />,
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        const res = current === img.length - 1 ? 0 : current + 1;
        return res;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="slider">
      <div className="slider-img slider-img-prev" key={prevImgIndex}>
        {img[prevImgIndex]}
      </div>
      <div className="slider-img" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider-img slider-img-next" key={nextImgIndex}>
        {img[nextImgIndex]}
      </div>
      <div className="slider_title">
        В жизни каждого человека есть 100500 поводов для праздника и каждый из
        них мы готовы сделать ярким и незабываемым!
      </div>
      <div className="slider_btn">
        <Link href="/catalog">
          <a className="slider_btn_catalog">Каталог</a>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
