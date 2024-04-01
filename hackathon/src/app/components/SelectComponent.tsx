import React, { useState, Fragment } from "react";
import cn from "classnames";
import { Listbox, Transition } from "@headlessui/react";

interface Option {
  value: string;
  label: string;
  id: number;
}

interface SelectProps {
  options: Option[];
  onSelect: (value: string) => void;
  className?: string;
  id?: string;
}

const SelectComponent: React.FC<SelectProps> = ({
  options,
  onSelect,
  className,
  id,
}) => {
  const style = cn(
    className,
    "bg-gradient-to-b from-[#232e96] via-50% via-[#25319f] to-60% to-[#232e96] rounded-[8px] p-4"
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const reference = React.useRef<HTMLSelectElement | null>(null);

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="select-container">
       <Listbox
        value={options[0]}
        onChange={newSelected => {
          if (onSelect) {
            onSelect(newSelected);
          }
          if (reference.current) {
            reference.current.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }}>
        {({ open }) => (
          <div className='relative'>
            <Listbox.Button
              className={`relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left 
                  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                  sm:text-sm sm:leading-6 overflow-hidden`}>
              <span className='flex items-center'>
                <span className='ml-3 block truncate'>{options[0].label}</span>
              </span>
              <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Listbox.Options
                className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base 
                          shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}>
                {options.map(option => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      cn(
                        active ? 'dark:bg-secondary bg-gray-100 text-secondary dark:text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={option.label}>
                    {({ selected, active }) => (
                      <>
                        <div className='flex items-center'>
                          <span className={cn(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                            {option.label}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={cn(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
      <select className="hidden" ref={reference} id={id} />
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
