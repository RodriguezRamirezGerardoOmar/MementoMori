import React from 'react'
import cn from 'classnames'

interface ButtonComponentProps {
  text: string;
  onClick?: () => void;
  className?: string;
}
//olaaa
const ButtonComponent = ({ text, onClick, className }:ButtonComponentProps ) => {
  const style = cn(className,'bg-gradient-to-r from-[#0f62df] to-[#083579] from-50% p-2 rounded-[8px] hover:scale-110')
  return (
    <button className={style} onClick={onClick}>{text}</button>
  )
}

export default ButtonComponent