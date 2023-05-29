import React from 'react';

import curriculum from '../../assets/curriculum.svg';

import image from '../../constants/image';
import { Link } from 'react-router-dom';

export const Articles = () => {
    return (
        <div className='p-[40px_0] relative w-full h-auto sm:p-[20px_0]'>
            <div className="main-container">
                <div className='flex w-full items-start gap-[20px] flex-col'>
                    <div className='flex items-center gap-[14px]'>
                        <img src={curriculum} alt="place icon" className='w-[28px] h-[35px] object-cover' />
                        <Link to='/reports' className='flex flex-col items-start'>
                            <div className='font-[600] text-[40px] leading-[51px] flex items-center gap-[5px] text-[#fff] md:text-[32px] md:leading-[41px] sm:text-[22px] sm:leading-[31px]'>Статьи <span className='text-[16px] text-[#fff] hidden sm:block'>››</span></div>
                            <div className='flex items-center gap-[5px] sm:hidden'>
                                <div className='text-[16px] text-[#fff] font-[600] leading-[15px]'>смотреть все</div>
                                <span className='text-[16px] text-[#fff]'>››</span>
                            </div>
                        </Link>
                    </div>
                    <div className='grid grid-cols-[1fr_1fr_1fr] gap-x-[30px] gap-y-[30px] auto-cols-auto auto-rows-[1fr] lg:grid-cols-[1fr_1fr] md:grid-cols-[1fr] sm:gap-y-[20px]'>
                        <Link to='/' className='lg:w-full'>
                            <div className='relative'>
                                <img src={image.article1} alt="report photo" className='w-full h-full object-cover' />
                                <div className='absolute top-auto left-[25px] bottom-[25px] z-10 flex flex-col items-start gap-[6px]'>
                                    <div className='font-[600] text-[22px] text-[#fff] leading-[28px] md:text-[18px] md:leading-[21px]'>Модные тенденции <br /> весны 2020</div>
                                    <div className='font-[600] text-[16px] text-[#D11F8A] leading-[21px]'>9 января</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/' className='lg:w-full'>
                            <div className='relative'>
                                <img src={image.article2} alt="report photo" className='w-full h-full object-cover' />
                                <div className='absolute top-auto left-[25px] bottom-[25px] z-10 flex flex-col items-start gap-[6px]'>
                                    <div className='font-[600] text-[22px] text-[#fff] leading-[28px] md:text-[18px] md:leading-[21px]'>Подарки на день <br /> Святого Валентина</div>
                                    <div className='font-[600] text-[16px] text-[#D11F8A] leading-[21px]'>1 февраля</div>
                                </div>
                            </div>
                        </Link>
                        <Link to='/' className='lg:w-full'>
                            <div className='relative'>
                                <img src={image.article3} alt="report photo" className='w-full h-full object-cover' />
                                <div className='absolute top-auto left-[25px] bottom-[25px] z-10 flex flex-col items-start gap-[6px]'>
                                    <div className='font-[600] text-[22px] text-[#fff] leading-[28px] md:text-[18px] md:leading-[21px]'>Секреты вечернего <br /> макияжа</div>
                                    <div className='font-[600] text-[16px] text-[#D11F8A] leading-[21px]'>25 декабря</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
