

// type SliderProps = {
//     transValue: number;

import React from "react";

// }
type SliderProps = {
    transValue: number;
    imgs: { pic: string, id: number}[];
    moveRight: () => void;
    moveLeft: () => void;
}

const Slider: React.FC<SliderProps> = ({
    transValue,
    imgs,
    moveRight,
    moveLeft
}) => {
    const clickRight = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        moveRight();
    ;}
    
    const clickLeft = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        moveLeft();
    };

    return (
        <>
            
        </>
    )

}


export default Slider;