import React, { useState, useEffect } from "react";
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import Slider from "./slider";
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import { Route } from "react-router-dom";

const imgs = [
    { img: img1, imgId: 1 },
    { img: img2, imgId: 2 }
]

const [ transValue, setTransValue ] = useState<number>(0)

const moveRight = (): void => {
    if (transValue !== 0) {
        setTransValue((prev) => prev - 70);
    }
    else {
        setTransValue(70 * (imgs.length - 1));
    }
};
useEffect(() => {;
    const imageInterval = setInterval(() => {
      moveRight();
    }, 3000);
    return () => {
      clearInterval(imageInterval);
    };
  });
function ImgBanner () {
    return (
        <>
            <img src={img1}>
            </img>
        </>
    );
}

export default ImgBanner;