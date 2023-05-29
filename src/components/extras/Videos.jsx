import React from 'react';

import movieSymbol from '../../assets/movie-symbol.svg';

import image from '../../constants/image';
import { Link } from 'react-router-dom';
import { MdLocationPin } from 'react-icons/md';

export const Videos = () => {
    return (
        <div className='p-[40px_0] relative w-full h-auto sm:p-[20px_0]'>
            <div className="main-container">
                <div className='flex w-full items-start gap-[20px] flex-col'>
                    <div className='flex items-center gap-[14px]'>
                        <img src={movieSymbol} alt="place icon" className='w-[35px] h-[30px] object-cover' />
                        <Link to='/reports' className='flex flex-col items-start'>
                            <div className='font-[600] text-[40px] leading-[51px] flex items-center gap-[5px] text-[#fff] md:text-[32px] md:leading-[41px] sm:text-[22px] sm:leading-[31px]'>Видео <span className='text-[16px] text-[#fff] hidden sm:block'>››</span></div>
                            <div className='flex items-center gap-[5px] sm:hidden'>
                                <div className='text-[16px] text-[#fff] font-[600] leading-[15px]'>смотреть все</div>
                                <span className='text-[16px] text-[#fff]'>››</span>
                            </div>
                        </Link>
                    </div>
                    <div className='grid grid-cols-[1fr_1fr] gap-x-[30px] gap-y-[30px] auto-cols-auto auto-rows-[1fr] lg:grid-cols-[1fr] sm:gap-y-[20px]'>
                        <div className='relative w-full h-[auto]'>
                            <img src={image.video1} alt="announce" className='w-full h-full object-cover' />
                            <div className='absolute top-[25px] left-[25px] p-[6px_10px] bg-[#D11F8A]'>
                                <span className='text-[18px] leading-[23px] text-[#fff] font-[600]'>3 февраля</span>
                            </div>
                            <div className='absolute left-[25px] bottom-[25px] flex flex-col items-start gap-[5px]'>
                                <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Тима Белорусских</div>
                                <div className='flex items-center gap-[20px]'>
                                    <div className='flex items-center gap-[5px]'>
                                        <MdLocationPin color='#CB1D45' />
                                        <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Neon</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full h-[auto]'>
                            <img src={image.video2} alt="announce" className='w-full h-full object-cover' />
                            <div className='absolute top-[25px] left-[25px] p-[6px_10px] bg-[#D11F8A]'>
                                <span className='text-[18px] leading-[23px] text-[#fff] font-[600]'>17 апреля</span>
                            </div>
                            <div className='absolute left-[25px] bottom-[25px] flex flex-col items-start gap-[5px]'>
                                <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Manizha</div>
                                <div className='flex items-center gap-[20px]'>
                                    <div className='flex items-center gap-[5px]'>
                                        <MdLocationPin color='#CB1D45' />
                                        <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Глобус</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full h-[auto]'>
                            <img src={image.video3} alt="announce" className='w-full h-full object-cover' />
                            <div className='absolute top-[25px] left-[25px] p-[6px_10px] bg-[#D11F8A]'>
                                <span className='text-[18px] leading-[23px] text-[#fff] font-[600]'>5 марта</span>
                            </div>
                            <div className='absolute left-[25px] bottom-[25px] flex flex-col items-start gap-[5px]'>
                                <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Ёлка</div>
                                <div className='flex items-center gap-[20px]'>
                                    <div className='flex items-center gap-[5px]'>
                                        <MdLocationPin color='#CB1D45' />
                                        <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Планета</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative w-full h-[auto]'>
                            <img src={image.video4} alt="announce" className='w-full h-full object-cover' />
                            <div className='absolute top-[25px] left-[25px] p-[6px_10px] bg-[#D11F8A]'>
                                <span className='text-[18px] leading-[23px] text-[#fff] font-[600]'>5 марта</span>
                            </div>
                            <div className='absolute left-[25px] bottom-[25px] flex flex-col items-start gap-[5px]'>
                                <div className='font-[600] text-[24px] text-[#fff] leading-[31px] md:text-[18px] md:leading-[21px]'>Dj Fire</div>
                                <div className='flex items-center gap-[20px]'>
                                    <div className='flex items-center gap-[5px]'>
                                        <MdLocationPin color='#CB1D45' />
                                        <div className='font-[400] text-[14px] text-[#fff] leading-[18px]'>Red Club</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};