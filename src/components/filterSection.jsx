import React, { useState } from 'react';
import './filterSection.css';

export default function FilterSection({ title, children }) {

    const [isOpen, setIsOpen] = useState(false);


    const toggleFilter = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                className='filterSection'
                onClick={toggleFilter}
            >
                <h3 id='titleBrand' >
                    <span>{title}</span>
                    <span>{isOpen ? "▲" : "▼"}</span>
                </h3>
            </button>
            {isOpen && (
                <div id='dataCheck'>
                    {children}
                </div>
            )}
        </div>
    )
}
