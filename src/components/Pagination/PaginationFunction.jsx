import React, { useEffect, useRef, useState } from 'react';
import CustomShow from './ShowCard';
import ArrowPagination from '@components/icon/ArrowPagination';

export const Show = ({ itemsPerPage, setItemsPerPage, setCurrentPage, showValue1, showValue2, showValue3 }) => {
    const showFilters = [
        { value: showValue1, label: showValue1 },
        { value: showValue2, label: showValue2 },
        { value: showValue3, label: showValue3 },
    ];

    const handleOptionClick = (option) => {
        setItemsPerPage(Number(option.value));
        setCurrentPage(1);
    };

    return (
        <CustomShow
            options={showFilters}
            styles="custom-select__show-option "
            styleselect="justify-between pl-2 "
            styleheader="custom-select__show "
            onOptionClick={handleOptionClick}
            selectedOption={showFilters.find(option => option.value === itemsPerPage.toString())}
        />
    );
};

const PaginationFunction = ({ data, renderItem, itemsPerPage: initialItemsPerPage, title, stylesRender, showValue1, showValue2, showValue3, children }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
    const [previousPage, setPreviousPage] = useState(1);

    if (!data || data.length === 0) {
        return <p>Дані відсутні.</p>;
    }

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentItems = data.slice(firstItemIndex, lastItemIndex);

    const prevPage = () => setCurrentPage(prev => {
        setPreviousPage(prev);
        return Math.max(prev - 1, 1);
    });
    const nextPage = () => setCurrentPage(prev => {
        setPreviousPage(prev);
        return Math.min(prev + 1, totalPages);
    });

    const numberPagination = (currentPage, totalPages) => {
        if (totalPages <= 3) {
            return Array.from({ length: totalPages }, (_, index) => index + 1);
        }
        if (currentPage === 1) {
            return [1, 2, 3, 4];
        }
        if (totalPages === currentPage) {
            return [currentPage - 3, totalPages - 2, totalPages - 1, totalPages];
        }
        return [currentPage - 1, currentPage, currentPage + 1];
    };

    const paginationScrollRef = useRef(null);

    useEffect(() => {
        if (paginationScrollRef.current && previousPage !== currentPage) {
            paginationScrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [currentPage, previousPage]);

    return (
        <div className='flex flex-col'>
            <div ref={paginationScrollRef} className='flex justify-between items-center pb-4 relative'>
                <div className='flex items-end gap-1'>
                    <p className='  text-[18px] '>All</p>
                    <p className='text-xs font-semibold grey-900 pb-3'>({data.length})</p>
                </div>
                <div className='flex items-center gap-3 '>
                    <p className=' text-[18px]'>Show:</p>
                    <Show itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} setCurrentPage={setCurrentPage} showValue1={showValue1} showValue2={showValue2} showValue3={showValue3} />
                </div>
            </div>
            {children}
            <div className={`${stylesRender}`}>
                {currentItems.map(renderItem)}
            </div>
            <div className="flex justify-start pt-12 sm:pt-16 gap-[5px] ">
                {currentPage !== 1 && (
                    <button
                        className="pagination-courses text-gray-900 rounded-l-4r hover:text-blue-500 group border-grey-border cursor-pointer"
                        onClick={prevPage}
                        disabled={currentPage === 1}
                    >
                        <ArrowPagination className="group-hover:scale-125 transition-all duration-300" />
                    </button>
                )}
                {numberPagination(currentPage, totalPages).map(number => (
                    <button
                        key={number}
                        onClick={() => {
                            setPreviousPage(currentPage);
                            setCurrentPage(number);
                        }}
                        className={`pagination-courses  group cursor-pointer ${currentPage === number ? 'text-purple' : 'border-grey-border'} text-base`}
                    >
                        {number}
                    </button>
                ))}
                {currentPage !== totalPages && (
                    <button
                        className="pagination-courses text-gray-900 rounded-r-4r hover:text-blue-500 group border-grey-border"
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                    >
                        <ArrowPagination className="transform rotate-180 group-hover:scale-125 transition-all duration-300" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default PaginationFunction;
