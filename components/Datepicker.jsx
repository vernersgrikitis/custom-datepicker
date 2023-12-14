'use client'
import { useState } from 'react';
import leftClick from '../assets/left-click.svg';
import rightClick from '../assets/right-click.svg';
import Button from './Button';

const Datepicker = () => {

    const [open, setOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleDayClick = (day) => {
        setSelectedDate(day);
    };

    const setNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const setPrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };
    
    
    const getDaysInMonth = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
    
        const daysInMonth = [];
        for (let day = 1; day <= lastDay.getDate(); day++) {
            daysInMonth.push(new Date(year, month, day));
        }
    
        for (let i = 0; i < firstDay.getDay(); i++) {
            daysInMonth.unshift(null);
        }
    
        return daysInMonth;
    };

    const daysInMonth = getDaysInMonth();

    return (
        <div className='mx-auto justify-center px-20 py-20 text-2xl w-[600px] h-[600px]'>
            <div className='h-full w-full'>
                <button onClick={handleOpen} className='border-2 border-black rounded py-0.5 px-36 bg-gray-100 w-full'>
                    {selectedDate.getDate()}/{selectedDate.getMonth() + 1}/{currentMonth.getFullYear()}
                </button>
                <div className='py-0.5'/>
                <div className={`${open ? 'border-2 border-black rounded bg-gray-200 flex mx-auto justify-center relative py-2' : 'hidden'}`}>
                    <Button
                        className='absolute left-1'
                        onClick={setPrevMonth}
                        imageSrc={leftClick}
                        imageAlt='left click'
                        imageSize={{ width: 30, height: 30 }}
                        classNameForImage='border-1 bg-gray-500 rounded cursor-pointer flex mx-auto'
                    />
                    {currentMonth.toLocaleString('en-US', { month: 'long' })} {currentMonth.getFullYear()}

                    <Button className='absolute right-1'
                        onClick={setNextMonth}
                        imageSrc={rightClick}
                        imageAlt='right click'
                        imageSize={{ width: 30, height: 30 }}
                        classNameForImage='border-1 bg-gray-500 rounded cursor-pointer flex mx-auto'
                    />
                </div>
                <div className='py-0.5'/>
                <div className={`${open ?  
                    'border-2 border-black rounded flex py-6 bg-gray-300' : 
                    'hidden'}`}>
                    <div className='flex mx-auto justify-between px-0.5 py-0.5 '>
                        <ul className='grid grid-cols-7 gap-5 px-0.5 py-0.5'>
                            {dayNames.map(dayName => (
                                <li key={dayName} className='text-center text-gray-500'>
                                    {dayName}
                                </li>
                            ))}
                            {daysInMonth.map((day, index) => (
                                <li 
                                    key={index}
                                    onClick={() => handleDayClick(day)} 
                                    className={`border-1 border-black rounded p-1 text-center bg-gray-400 cursor-pointer hover:bg-gray-500 hover:text-white
                                    ${day ? '' : 'empty'}`}
                                >
                                    {day ? day.getDate() : ''}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Datepicker