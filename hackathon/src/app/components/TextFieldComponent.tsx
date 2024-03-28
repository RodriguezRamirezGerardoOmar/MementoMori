import React from "react";
import cn from "classnames";

interface TextFieldComponentProps {
  className?: string;
  text?: string;
}

const TextFieldComponent = ({ className, text }: TextFieldComponentProps) => {
  const style = cn(className, "rounded-[16px] border-2");
  return (
    <>
      {text ? <p>{text}</p> : null}
      <input type="text" className={style} />
    </>
  );
};

export default TextFieldComponent;
