// Select.tsx

import React, { useState } from 'react';
import cn from 'classnames';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  onSelect: (value: string) => void;
  className?: string;
}

const SelectComponent: React.FC<SelectProps> = ({ options, onSelect, className }) => {
    const style = cn(className, 'bg-gradient-to-b from-[#232e96] via-50% via-[#25319f] to-60% to-[#232e96] rounded-[8px] p-4')
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="select-container">
      <div className={style} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : "Seleccione una opción"}
      </div>
      {isOpen && (
        <div className="options-container">
          {options.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectComponent;
