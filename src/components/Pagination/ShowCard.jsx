import React, { useState, useRef, useEffect } from 'react';
import '@components/Pagination/CustomSelect.css';
import ArrowDown from '@components/icon/ArrowDownPagination';

const CustomShow = ({ options, styles, text, styleheader, onOptionClick, selectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        if (onOptionClick) {
            onOptionClick(option);
        }
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="custom-select text-purple" ref={dropdownRef}>
            <div className={`${styleheader}`} onClick={handleToggle}>
                {selectedOption ? selectedOption.label : `${text}`}
                <span className={`custom-select__arrow ${isOpen ? 'open' : ''}`}> <ArrowDown /> </span>
            </div>
            {isOpen && (
                <ul className={` ${styles} `}>
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`custom-select__option-show`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {selectedOption && selectedOption.value === option.value && (
                                <span className="selected-option-show"> <ArrowDown /> </span>
                            )}
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomShow;
