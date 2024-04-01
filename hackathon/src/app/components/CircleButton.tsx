import React from "react";
import cn from "classnames";

interface ButtonComponentProps {
    iconType: 'check' | 'cross';
    onClick?: () => void;
    className?: string;
}

const CircleButton = ({ iconType, onClick, className }: ButtonComponentProps) => {
    let buttonText;
    switch (iconType) {
    case 'check':
        buttonText = '✔'; 
        break;
    case 'cross':
        buttonText = '✖';
    }

    const style = cn(
    className,
    "bg-gradient-to-r from-button_pressed_blue to-[#083579] p-4 rounded-full flex items-center justify-center text-white w-10 h-10"
    );

    return (
    <button className={style} onClick={onClick}>
        +
    </button>
    );
};

export default CircleButton;

//const CircleButton = ({ text, onClick, className }: ButtonComponentProps) => {
//  const style = cn(
//    className,
//    "bg-gradient-to-r from-button_pressed_blue to-[#083579] p-4 rounded-full border-start-start-radius: 8888px border-end-start-radius: 8888px"
//  );
//  return (
//    <button className={style} onClick={onClick}>
//     +
//    </button>
//  );
//};

//export default CircleButton;
